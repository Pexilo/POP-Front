import { IFigure } from 'src/app/models/IFigure.model';
import { AddFigureDialogComponent } from './../misc/add-figure-dialog/add-figure-dialog.component';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { FiguresService } from './../../services/figures.service';
import { IUniverse } from './../../models/IUniverse.model';
import { UniversesService } from './../../services/universes.service';
import { Component, OnInit } from '@angular/core';
import { IFigureAndUniverse } from 'src/app/models/IFigureAndUniverse.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss'],
})
export class FiguresComponent implements OnInit {
  figures: IFigureAndUniverse[] = [];
  universes!: IUniverse[];
  universe!: IUniverse;

  name!: string;
  imageURL!: string;
  idUniverse!: number;

  constructor(
    private universesService: UniversesService,
    private activedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    let universeId = this.activedRoute.snapshot.params['idUniverse'];
    universeId ? this.getByUniverseId(universeId) : this.getUniverses();
  }

  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;

        this.universes.forEach((universe) => {
          universe.figures.forEach((figure) => {
            this.figures.push({
              ...figure,
              universeName: universe.name,
              universeImageURL: universe.imageURL,
            });
          });
        });
      },
    });
  }

  getByUniverseId(id: number): void {
    this.universesService.getUniverseById(id).subscribe({
      next: (res) => {
        this.universe = res.body;

        this.figures = this.universe.figures.map((figure) => {
          return {
            ...figure,
            universeName: this.universe.name,
            universeImageURL: this.universe.imageURL,
          };
        });
      },
    });
  }

  openAddFigureDialog() {
    const dialogRef = this.dialog.open(AddFigureDialogComponent, {
      width: '270px',
      data: {
        name: this.name,
        imageURL: this.imageURL,
        idUniverse: this.idUniverse,
      },
    });

    dialogRef.afterClosed().subscribe((result: IFigure) => {
      if (!result) return;
      console.log(
        '🚀 ~ FiguresComponent ~ dialogRef.afterClosed ~ result',
        result
      );

      this.universesService.addFigure(result).subscribe({
        next: (res) => {
          this.toast.success({
            detail: 'Création de figurine',
            summary: `La figurine ${result.name} a été créée avec succès`,
            duration: 2000,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
      });
    });
  }
}

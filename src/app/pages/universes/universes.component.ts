import { NgToastService } from 'ng-angular-popup';
import { AddUniverseDialogComponent } from './../misc/add-universe-dialog/add-universe-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UniversesService } from './../../services/universes.service';
import { IUniverse } from 'src/app/models/IUniverse.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universes',
  templateUrl: './universes.component.html',
  styleUrls: ['./universes.component.scss'],
})
export class UniversesComponent implements OnInit {
  universes!: IUniverse[];
  size!: number;

  name!: string;
  imageURL!: string;

  constructor(
    private universesService: UniversesService,
    public dialog: MatDialog,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getUniverses();
  }

  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;
      },
    });
  }

  openAddUniverseDialog() {
    const dialogRef = this.dialog.open(AddUniverseDialogComponent, {
      width: '270px',
      data: {
        name: this.name,
        imageURL: this.imageURL,
      },
    });

    dialogRef.afterClosed().subscribe((result: IUniverse) => {
      if (!result) return;

      this.universesService.createUniverse(result).subscribe({
        next: (res) => {
          this.toast.success({
            detail: "Création d'univers",
            summary: `L'univers ${result.name} a été créé avec succès`,
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

import { IFigureAndUniverse } from './../../models/IFigureAndUniverse.model';
import { UniversesService } from './../../services/universes.service';
import { FiguresService } from './../../services/figures.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-single-figure',
  templateUrl: './single-figure.component.html',
  styleUrls: ['./single-figure.component.scss'],
})
export class SingleFigureComponent implements OnInit {
  @Input() figure!: IFigureAndUniverse;
  universeName!: string;
  figureId!: number;
  loaded!: boolean;

  constructor(
    private activedRoute: ActivatedRoute,
    private figuresService: FiguresService,
    private universesService: UniversesService,
    private toast: NgToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.figureId = this.activedRoute.snapshot.params['idFigure'];
    //si c'est un affichage single ou si c'est la liste (pour pas bloquer le chargement)
    this.figureId ? this.getFigureById(this.figureId) : (this.loaded = true);
  }

  getFigureById(id: number): void {
    this.figuresService.getFigureById(id).subscribe({
      next: (res) => {
        this.figure = res.body;
        this.getUniverseById(this.figure.idUniverse);
      },
    });
  }

  getUniverseById(id: number): void {
    this.universesService.getUniverseById(id).subscribe({
      next: (res) => {
        this.universeName = res.body.name;
        this.loaded = true;
      },
    });
  }

  removeFigureById(id: number): void {
    this.universesService.removeFigureById(id).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Effectué!',
          summary: 'Figurine supprimée',
          duration: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
    });
  }
}

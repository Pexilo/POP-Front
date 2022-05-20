import { IFigureCard } from './../../models/IFigureCard.model';
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
  @Input() figure!: IFigureCard; // Décorateur qui permet de passer des données du composant parent au composant enfant.

  universeName!: string;
  figureId!: number;

  constructor(
    private activedRoute: ActivatedRoute,
    private figuresService: FiguresService,
    private universesService: UniversesService,
    private toast: NgToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupération de l'id de la figure si elle est passée en paramètre dans l'url
    this.figureId = this.activedRoute.snapshot.params['idFigure'];
    if (this.figureId) this.getFigureById(this.figureId); // Si l'id est passé en paramètre, on récupère la figure
  }

  /**
   * Obtient une figure par son id, puis obtient l'univers de cette figure
   * @param {number} id - number - L'id de la figurine à obtenir.
   */
  getFigureById(id: number): void {
    this.figuresService.getFigureById(id).subscribe({
      next: (res) => {
        this.figure = res.body;
        this.getUniverseById(this.figure.idUniverse);
      },
    });
  }

  /**
   * Cette fonction prend un id, puis utilise cet id pour obtenir le nom de l'univers
   * @param {number} id - number - L'id de l'univers à obtenir.
   */
  getUniverseById(id: number): void {
    this.universesService.getUniverseById(id).subscribe({
      next: (res) => {
        this.universeName = res.body.name;
      },
    });
  }

  /**
   * Supprime une figurine de l'api par son id
   * @param {number} id - number - L'id de la figurine à supprimer.
   */
  removeFigureById(id: number): void {
    this.universesService.removeFigureById(id).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Effectué!',
          summary: 'Figurine supprimée',
          duration: 2000,
        });
        setTimeout(() => {
          window.location.reload(); // Rafraichit la page pour mettre à jour les données
        }, 2000);
      },
    });
  }

  /**
   * La fonction prend un IdUniverse comme paramètre et navigue vers le composant d'univers avec
   * l'IdUniverse comme paramètre
   * @param {number} IdUniverse - number - L'id de l'univers à afficher.
   */
  onSelectUniverse(IdUniverse: number): void {
    this.router.navigate(['/universe', IdUniverse]);
  }
}

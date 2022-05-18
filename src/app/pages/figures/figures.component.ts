import { NgxSpinnerService } from 'ngx-spinner';
import { IFigure } from 'src/app/models/IFigure.model';
import { AddFigureDialogComponent } from './../misc/add-figure-dialog/add-figure-dialog.component';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';
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
  figures: IFigureAndUniverse[] = []; // liste pour l'affichage des figures, interface différente pour ajouter des infos sur l'univers associé
  universes!: IUniverse[]; // liste des univers, (j'utilise la liste figures dans univers pour afficher mes figurines)
  universe!: IUniverse; // dans le cas où on a un univers, on récupère les figures de l'univers

  // variables du dialog d'ajout de figurine
  name!: string;
  imageURL!: string;
  idUniverse!: number;

  constructor(
    private universesService: UniversesService,
    private activedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private toast: NgToastService // module de notifs
  ) {}

  ngOnInit(): void {
    let universeId = this.activedRoute.snapshot.params['idUniverse']; // récupère l'id de l'univers dans l'url
    universeId ? this.getByUniverseId(universeId) : this.getUniverses(); // si on a un id, on récupère les figures de l'univers
  }

  /**
   * la fonction getUniverses() de l'universService, renvoie un observable.
   * ensuite pour chaque univers, j'accède à chaque figurine.
   * Pour chaque figurine, je pousse la figurine vers le tableau
   * figures, et j'ajoute également les propriétés universeName et universeImageURL à la figure
   */
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

  /**
   * la fonction getByUniverseId(id: number) de l'universeService permet d'obtenir l'univers par son id,
   * puis je map le tableau de chiffres pour inclure le nom et l'imageURL de l'univers
   * @param {number} id - nombre - l'id de l'univers à obtenir
   */
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

  /**
   * la fonction addFigure() permet d'ajouter une figurine à l'univers
   * Le formulaire est envoyé à l'universService, qui l'ajoute à l'univers
   * Puis, on récupère les figures de l'univers, et on les ajoute à la liste
   */
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

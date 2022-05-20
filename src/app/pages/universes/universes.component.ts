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
    this.getUniverses(); // affiche tous les univers
  }

  /**
   * La fonction appelle la fonction getUniverses() de l'universsService, qui renvoie un observable.
   * qui va par la suite affecter la réponse à la variable d'univers
   */
  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;
      },
    });
  }

  /**
   * la fonction openAddUniverseDialog() permet d'ajouter un univers à la liste des univers
   * Le formulaire est envoyé à l'universService, qui va l'ajouter grâce à l'api
   */
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
            summary: `${result.name} créé avec succès`,
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

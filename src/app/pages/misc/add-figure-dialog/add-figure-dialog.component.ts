import { UniversesService } from './../../../services/universes.service';
import { IUniverse } from './../../../models/IUniverse.model';
import { IFigure } from 'src/app/models/IFigure.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-figure-dialog',
  templateUrl: './add-figure-dialog.component.html',
  styleUrls: ['./add-figure-dialog.component.scss'],
})
export class AddFigureDialogComponent implements OnInit {
  universes!: IUniverse[];

  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; //regex d'url

  // FormControl pour chaque champ du formulaire afin de vérifier les erreurs
  name = new FormControl('', [Validators.required]);
  idUniverse = new FormControl('', [Validators.required]);
  imageURL = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg),
  ]);

  constructor(
    public dialogRef: MatDialogRef<AddFigureDialogComponent>, // Référence à la boîte de dialogue.
    @Inject(MAT_DIALOG_DATA) public figure: IFigure, // injecte les données qui ont été transmises par la boîte de dialogue.
    private universesService: UniversesService
  ) {}

  ngOnInit(): void {
    this.getUniverses(); // affiche les univers dans le select du formulaire
  }

  /**
   * Renvoie un message d'erreur si le formulaire est invalide, sinon il renvoie une chaîne vide
   * @param {string} field - string : le nom du champ où afficher l'erreur
   * @returns Le message d'erreur
   */
  getErrorMessage(field: string) {
    if (this.imageURL.hasError('pattern') && field === 'imageURL') {
      return "L'URL doit être une URL valide";
    }

    if (
      this.name.hasError('required') ||
      this.idUniverse.hasError('required')
    ) {
      return 'Merci de remplir le champ';
    }

    return '';
  }

  /**
   * La fonction onNoClick() ferme la boîte de dialogue en cas d'appui sur le bouton "Annuler"
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * La fonction onAddClick() est appelée lorsque l'utilisateur clique sur le bouton "Ajouter". Il
   * prend les valeurs du formulaire et les affecte à l'objet figure. Ensuite, il ferme la boîte de
   * dialogue et renvoie l'objet figure au composant parent
   */
  onAddClick(): void {
    this.figure.name = this.name.value;
    this.figure.imageURL = this.imageURL.value;
    this.figure.idUniverse = this.idUniverse.value;
    this.dialogRef.close(this.figure);
  }

  /**
   * La fonction appelle la fonction getUniverses() de l'universsService, qui renvoie un observable.
   * Le corps de l'objet de réponse est ensuite affecté à la propriété des univers pour les afficher
   * dans le select du formulaire
   */
  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;
      },
    });
  }
}

import { FormControl, Validators } from '@angular/forms';
import { IUniverse } from 'src/app/models/IUniverse.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-universe-dialog',
  templateUrl: './add-universe-dialog.component.html',
  styleUrls: ['./add-universe-dialog.component.scss'],
})
export class AddUniverseDialogComponent {
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; //regex d'url

  // FormControl pour chaque champ du formulaire afin de vérifier les erreurs
  name = new FormControl('', [Validators.required]);
  imageURL = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg),
  ]);

  constructor(
    public dialogRef: MatDialogRef<AddUniverseDialogComponent>, // Référence à la boîte de dialogue.
    @Inject(MAT_DIALOG_DATA) public universe: IUniverse // injecte les données qui ont été transmises par la boîte de dialogue.
  ) {}

  /**
   * Renvoie un message d'erreur si le formulaire est invalide, sinon il renvoie une chaîne vide
   * @param {string} field - string : le nom du champ où afficher l'erreur
   * @returns Le message d'erreur
   */
  getErrorMessage(field: string) {
    if (this.imageURL.hasError('pattern') && field === 'imageURL') {
      return "L'URL doit être une URL valide";
    }

    if (this.name.hasError('required')) {
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
   * prend les valeurs du formulaire et les affecte à l'objet universe. Ensuite, il ferme la boîte de
   * dialogue et renvoie l'objet universe au composant parent
   */
  onAddClick(): void {
    this.universe.name = this.name.value;
    this.universe.imageURL = this.imageURL.value;
    this.dialogRef.close(this.universe);
  }
}

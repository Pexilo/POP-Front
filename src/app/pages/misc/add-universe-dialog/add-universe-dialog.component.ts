import { FormControl, Validators } from '@angular/forms';
import { IUniverse } from 'src/app/models/IUniverse.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-universe-dialog',
  templateUrl: './add-universe-dialog.component.html',
  styleUrls: ['./add-universe-dialog.component.scss'],
})
export class AddUniverseDialogComponent implements OnInit {
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  name = new FormControl('', [Validators.required]);
  imageURL = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg),
  ]);

  constructor(
    public dialogRef: MatDialogRef<AddUniverseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public universe: IUniverse
  ) {}

  ngOnInit(): void {}

  getErrorMessage(field: string) {
    if (this.imageURL.hasError('pattern') && field === 'imageURL') {
      return "L'URL doit être une URL valide";
    }

    if (this.name.hasError('required')) {
      return 'Merci de remplir le champ';
    }

    return '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.universe.name = this.name.value;
    this.universe.imageURL = this.imageURL.value;
    this.dialogRef.close(this.universe);
  }
}

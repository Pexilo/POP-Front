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

  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  name = new FormControl('', [Validators.required]);
  idUniverse = new FormControl('', [Validators.required]);
  imageURL = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg),
  ]);

  constructor(
    public dialogRef: MatDialogRef<AddFigureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public figure: IFigure,
    private universesService: UniversesService
  ) {}

  ngOnInit(): void {
    this.getUniverses();
  }

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

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.figure.name = this.name.value;
    this.figure.imageURL = this.imageURL.value;
    this.figure.idUniverse = this.idUniverse.value;
    this.dialogRef.close(this.figure);
  }

  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;
      },
    });
  }
}

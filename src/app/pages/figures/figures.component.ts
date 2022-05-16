import { IUniverse } from './../../models/IUniverse.model';
import { UniversesService } from './../../services/universes.service';
import { FiguresService } from './../../services/figures.service';
import { IFigure } from 'src/app/models/IFigure.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss'],
})
export class FiguresComponent implements OnInit {
  figures!: IFigure[];
  universes!: IUniverse[];

  constructor(
    private figuresService: FiguresService,
    private universesService: UniversesService
  ) {}

  ngOnInit(): void {
    this.getFigures();
    this.getUniverses();
  }

  getFigures(): void {
    this.figuresService.getFigures().subscribe({
      next: (res) => {
        this.figures = res.body;
      },
    });
  }

  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;

        // for (let i = 0; i < this.universes.length; i++) {
        //   this.figures = this.universes[i].figures;
        // }
        // console.log(this.figures);
      },
    });
  }
}

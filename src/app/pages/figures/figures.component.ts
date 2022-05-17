import { IUniverse } from './../../models/IUniverse.model';
import { UniversesService } from './../../services/universes.service';
import { FiguresService } from './../../services/figures.service';
import { Component, OnInit } from '@angular/core';
import { IFigureAndUniverse } from 'src/app/models/IFigureAndUniverse.model';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss'],
})
export class FiguresComponent implements OnInit {
  figures: IFigureAndUniverse[] = [];
  universes!: IUniverse[];

  constructor(
    private figuresService: FiguresService,
    private universesService: UniversesService
  ) {}

  ngOnInit(): void {
    //this.getFigures();
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
        console.log(
          '🚀 ~ FiguresComponent ~ this.universesService.getUniverses ~ res.body',
          res.body
        );

        for (let i = 0; i < this.universes.length; i++) {
          for (let j = 0; j < this.universes[i].figures.length; j++) {
            this.figures.push({
              id: this.universes[i].figures[j].id,
              name: this.universes[i].figures[j].name,
              imageURL: this.universes[i].figures[j].imageURL,
              idUniverse: this.universes[i].figures[j].idUniverse,
              universeName: this.universes[i].name,
              universeImageURL: this.universes[i].imageURL,
            });
          }
        }
      },
    });
  }
}

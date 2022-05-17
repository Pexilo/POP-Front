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
    this.getUniverses();
  }

  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;
        console.log(
          '🚀 ~ FiguresComponent ~ this.universesService.getUniverses ~ this.universes',
          this.universes
        );

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
}

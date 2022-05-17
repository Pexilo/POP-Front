import { ActivatedRoute } from '@angular/router';
import { FiguresService } from './../../services/figures.service';
import { IUniverse } from './../../models/IUniverse.model';
import { UniversesService } from './../../services/universes.service';
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
  universe!: IUniverse;

  constructor(
    private universesService: UniversesService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let universeId = this.activedRoute.snapshot.params['idUniverse'];
    console.log('🚀 ~ FiguresComponent ~ ngOnInit ~ universeId', universeId);
    universeId ? this.getByUniverseId(universeId) : this.getUniverses();
  }

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

        console.log(
          '🚀 ~ SingleFigureComponent ~ this.figuresService.getByUniverseId ~ this.figure',
          this.figures
        );
      },
    });
  }
}

import { UniversesService } from './../../services/universes.service';
import { FiguresService } from './../../services/figures.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFigure } from 'src/app/models/IFigure.model';

@Component({
  selector: 'app-single-figure',
  templateUrl: './single-figure.component.html',
  styleUrls: ['./single-figure.component.scss'],
})
export class SingleFigureComponent implements OnInit {
  @Input() figure!: IFigure;
  universeName!: string;
  loaded!: boolean;

  constructor(
    private activedRoute: ActivatedRoute,
    private figuresService: FiguresService,
    private universesService: UniversesService
  ) {}

  ngOnInit(): void {
    // let figureId = this.activedRoute.snapshot.params['id'];
    // this.getFigureById(figureId);
  }

  getFigureById(id: number): void {
    this.figuresService.getFigureById(id).subscribe({
      next: (res) => {
        this.figure = res.body;
        this.getUniverseById(this.figure.idUniverse);
      },
    });
  }

  getUniverseById(id: number): void {
    this.universesService.getUniverseById(id).subscribe({
      next: (res) => {
        this.universeName = res.body.name;
        this.loaded = true;
      },
    });
  }
}

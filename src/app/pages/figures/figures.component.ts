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

  constructor(private figuresService: FiguresService) {}

  ngOnInit(): void {
    this.getFigures();
  }

  getFigures(): void {
    this.figuresService.getFigures().subscribe({
      next: (res) => {
        this.figures = res.body;
        console.log(
          '🚀 ~ FiguresComponent ~ this.figuresService.getFigures ~ this.figures',
          this.figures
        );
      },
    });
  }
}

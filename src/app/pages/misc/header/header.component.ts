import { NgToastService } from 'ng-angular-popup';
import { IFigure } from 'src/app/models/IFigure.model';
import { Demo } from './../../../../assets/demo';
import { IUniverse } from 'src/app/models/IUniverse.model';
import { UniversesService } from './../../../services/universes.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  universes!: IUniverse[];
  figures!: IFigure[];
  break!: boolean;

  constructor(
    private universesService: UniversesService,
    private demo: Demo,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  async inserts() {
    this.universes = this.demo.getDemoUniverses();
    this.figures = this.demo.getDemoFigures();

    for (const universe of this.universes) {
      this.spinner.show();
      await this.resolveAfter1s();

      this.universesService
        .createUniverse(universe)
        .subscribe({ next: () => {} });
    }

    for (const figure of this.figures) {
      await this.resolveAfter1s();

      this.universesService.addFigure(figure).subscribe({ next: () => {} });
    }
    this.spinner.hide();
    window.location.reload();
  }

  resolveAfter1s() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
}

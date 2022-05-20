import { IFigure } from 'src/app/models/IFigure.model';
import { Demo } from './../../../../assets/demo';
import { IUniverse } from 'src/app/models/IUniverse.model';
import { UniversesService } from './../../../services/universes.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  universes!: IUniverse[];
  figures!: IFigure[];

  constructor(
    private universesService: UniversesService,
    private demo: Demo,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigate(['/universes']); // redirection vers la page des univers
  }

  /**
   * Crée une liste d'univers et de figures, puis il les insère dans la base de données de manière asynchrone
   */
  async inserts() {
    this.universes = this.demo.getDemoUniverses();
    this.figures = this.demo.getDemoFigures();

    for (const universe of this.universes) {
      this.spinner.show(); // loading de la page

      await this.resolveAfter(500); // permet de donner le temps à l'api d'insérer les données

      this.universesService
        .createUniverse(universe)
        .subscribe({ next: () => {} });
    }

    for (const figure of this.figures) {
      await this.resolveAfter(500); // permet de donner le temps à l'api d'insérer les données

      this.universesService.addFigure(figure).subscribe({ next: () => {} });
    }
    this.spinner.hide();
    window.location.reload();
  }

  /**
   * Renvoie une promesse qui se résout après un nombre donné de millisecondes
   * @param {number} ms - nombre - Le nombre de millisecondes à attendre avant de résoudre la promesse.
   * @returns Une promesse qui se résout après un certain temps.
   */
  resolveAfter(ms: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}

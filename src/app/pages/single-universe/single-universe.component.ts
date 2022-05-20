import { NgToastService } from 'ng-angular-popup';
import { UniversesService } from './../../services/universes.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUniverse } from 'src/app/models/IUniverse.model';

@Component({
  selector: 'app-single-universe',
  templateUrl: './single-universe.component.html',
  styleUrls: ['./single-universe.component.scss'],
})
export class SingleUniverseComponent {
  @Input() universe!: IUniverse; // Décorateur qui permet de transmettre des données du composant parent au composant enfant.

  constructor(
    private route: Router,
    private universesService: UniversesService,
    private toast: NgToastService
  ) {}

  /**
   * La fonction prend un IdUniverse comme paramètre, puis navigue vers le composant d'univers avec
   * l'IdUniverse comme paramètre
   * @param {number} IdUniverse - number - l'id de l'univers
   */
  onSelectUniverse(IdUniverse: number) {
    this.route.navigate(['/universe/' + IdUniverse]);
  }

  /**
   * Supprime un univers par son id
   * @param {number} IdUniverse - number - l'id de l'univers à supprimer
   */
  removeUniverseById(IdUniverse: number) {
    this.universesService.removeUniverseById(IdUniverse).subscribe({
      next: (res) => {
        this.toast.success({
          detail: 'Effectué!',
          summary: 'Univers supprimé',
          duration: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
    });
  }
}

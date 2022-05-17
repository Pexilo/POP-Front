import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUniverse } from 'src/app/models/IUniverse.model';

@Component({
  selector: 'app-single-universe',
  templateUrl: './single-universe.component.html',
  styleUrls: ['./single-universe.component.scss'],
})
export class SingleUniverseComponent implements OnInit {
  @Input() universe!: IUniverse;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onSelectMenu(IdFigure: number) {
    this.route.navigate(['/figure/' + IdFigure]);
  }
  onSelectUniverse(IdUniverse: number) {
    this.route.navigate(['/universe/' + IdUniverse]);
  }
}

import { UniversesService } from './../../services/universes.service';
import { IUniverse } from 'src/app/models/IUniverse.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universes',
  templateUrl: './universes.component.html',
  styleUrls: ['./universes.component.scss'],
})
export class UniversesComponent implements OnInit {
  universes!: IUniverse[];
  size!: number;

  constructor(private universesService: UniversesService) {}

  ngOnInit(): void {
    this.getUniverses();
  }

  getUniverses(): void {
    this.universesService.getUniverses().subscribe({
      next: (res) => {
        this.universes = res.body;
      },
    });
  }
}

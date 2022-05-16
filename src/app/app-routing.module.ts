import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiguresComponent } from './pages/figures/figures.component';
import { SingleFigureComponent } from './pages/single-figure/single-figure.component';
import { UniversesComponent } from './pages/universes/universes.component';

const routes: Routes = [
  {
    path: 'universes',
    component: UniversesComponent,
  },
  {
    path: 'figures',
    component: FiguresComponent,
  },
  {
    path: 'figure/:id',
    component: SingleFigureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

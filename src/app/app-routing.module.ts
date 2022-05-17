import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleUniverseComponent } from './pages/single-universe/single-universe.component';
import { FiguresComponent } from './pages/figures/figures.component';
import { SingleFigureComponent } from './pages/single-figure/single-figure.component';
import { UniversesComponent } from './pages/universes/universes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/universes',
    pathMatch: 'full',
  },
  {
    path: 'universes',
    component: UniversesComponent,
  },
  {
    path: 'figures',
    component: FiguresComponent,
  },
  {
    path: 'figure/:idFigure',
    component: SingleFigureComponent,
  },
  {
    path: 'universe/:idUniverse',
    component: FiguresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

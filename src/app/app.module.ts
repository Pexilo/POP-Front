import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/misc/header/header.component';
import { FiguresComponent } from './pages/figures/figures.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleFigureComponent } from './pages/single-figure/single-figure.component';
import { UniversesComponent } from './pages/universes/universes.component';
import { SingleUniverseComponent } from './pages/single-universe/single-universe.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiguresComponent,
    NotfoundComponent,
    SingleFigureComponent,
    UniversesComponent,
    SingleUniverseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

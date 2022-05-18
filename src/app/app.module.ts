import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/misc/header/header.component';
import { FiguresComponent } from './pages/figures/figures.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleFigureComponent } from './pages/single-figure/single-figure.component';
import { UniversesComponent } from './pages/universes/universes.component';
import { SingleUniverseComponent } from './pages/single-universe/single-universe.component';
import { AddFigureDialogComponent } from './pages/misc/add-figure-dialog/add-figure-dialog.component';
import { AddUniverseDialogComponent } from './pages/misc/add-universe-dialog/add-universe-dialog.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiguresComponent,
    NotfoundComponent,
    SingleFigureComponent,
    UniversesComponent,
    SingleUniverseComponent,
    AddFigureDialogComponent,
    AddUniverseDialogComponent,
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
    NgToastModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddFigureDialogComponent, AddUniverseDialogComponent],
})
export class AppModule {}

import { IFigure } from 'src/app/models/IFigure.model';
import { IUniverse } from './../models/IUniverse.model';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniversesService {
  url = 'universe/';

  constructor(private apiService: ApiService) {}

  getUniverses(): Observable<any> {
    return this.apiService.doGet<IUniverse>(this.url + 'all', {
      observe: 'response',
      responseType: 'json',
    });
  }

  getUniverseById(id: number): Observable<any> {
    return this.apiService.doGet<IUniverse>(this.url + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  removeFigureById(id: number): Observable<any> {
    return this.apiService.doDelete<IUniverse>(
      this.url + 'removeFigure/' + id,
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }

  addFigure(figure: IFigure): Observable<any> {
    return this.apiService.doPost<IFigure>(this.url + 'addFigure', figure, {
      observe: 'response',
      responseType: 'json',
    });
  }
}

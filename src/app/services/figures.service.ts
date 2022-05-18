import { IFigure } from 'src/app/models/IFigure.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiguresService {
  url = 'figure/';

  constructor(private apiService: ApiService) {}

  getFigures(): Observable<any> {
    return this.apiService.doGet<IFigure>(this.url + 'all', {
      observe: 'response',
      responseType: 'json',
    });
  }

  getFigureById(id: number): Observable<any> {
    return this.apiService.doGet<IFigure>(this.url + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  deleteFigureById(id: number): Observable<any> {
    return this.apiService.doDelete<IFigure>(this.url + 'delete/' + id, {
      observe: 'response',
      responseType: 'json',
    });
  }

  createFigure(figure: IFigure): Observable<any> {
    return this.apiService.doPost<IFigure>(this.url + 'create', figure, {
      observe: 'response',
      responseType: 'json',
    });
  }
}

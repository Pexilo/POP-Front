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
    return this.apiService.doGet(this.url + 'all', {
      observe: 'response',
      responseType: 'json',
    });
  }

  getFigureById(id: number): Observable<any> {
    return this.apiService.doGet(this.url + id, {
      observe: 'response',
      responseType: 'json',
    });
  }
}

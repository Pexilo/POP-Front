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
}

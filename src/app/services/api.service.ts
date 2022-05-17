import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URLAPI = 'http://localhost:8080/popback/api/';

  constructor(private http: HttpClient) {}

  public doGet<T>(url: string, options?: any) {
    return this.http
      .get<T>(this.URLAPI + url, options)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  public doPost(url: string, body: any, options?: any) {
    return this.http
      .post(this.URLAPI + url, body, options)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  public doPut(url: string, data: any, options?: any) {
    return this.http
      .put(this.URLAPI + url, data, options)
      .pipe(retry(1), catchError(this.errorHandler));
  }
  public doDelete(url: string, options?: any) {
    return this.http
      .delete(this.URLAPI + url, options)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  //Error interceptor
  errorHandler(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

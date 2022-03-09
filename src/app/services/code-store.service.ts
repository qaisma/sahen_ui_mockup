import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CodeStoreService {
  private CODE_STORE_API_PATH = 'CodeStores/';
  private baseUrl = environment.baseUrl;

  sessionId: string = '';

  constructor(private httpClient: HttpClient) { }

  getSession(code: string): Observable<string> {
    const url = this.baseUrl + this.CODE_STORE_API_PATH + 'GetSession/' + code;
    return this.httpClient.get<string>(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}


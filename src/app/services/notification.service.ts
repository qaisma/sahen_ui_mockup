import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MenuItem, MenuSection, Restaurant } from '../models/restaurant.model';
import { CartItem, Cart } from '../models/cart.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
   
    constructor(
    ) {
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
        //   this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}

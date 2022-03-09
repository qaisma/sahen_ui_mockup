import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from '../api-paths';
import { environment } from '../../environments/environment';
import { Menu, MenuItem, Restaurant, RestaurantChain } from '../models/restaurant.model';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationsService } from './notification.service';
// import { localRestaurant } from '../sample.data'


const initialRestaurant: Restaurant = {
    RestaurantChain: new RestaurantChain,
    Menu: new Menu
}

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    private _baseUrl = environment.baseUrl;

    restaurant: Restaurant = initialRestaurant;

    constructor(
        private http: HttpClient,
        private notificationsService: NotificationsService
    ) {
    }

    getMenuSectionItem(dishId: string): MenuItem {
        let result = new MenuItem();
        if (!dishId) {
            alert('invalid data!');
        } else {
            if (!this.restaurant || !this.restaurant.Menu || !this.restaurant.Menu.MenuSections
                || this.restaurant.Menu.MenuSections.length == 0) {
                alert('Menu or Menu sections are empty!');
            }
            this.restaurant.Menu.MenuSections.forEach(section => {
                if (section.MenuItems.filter(i => i.Id == dishId).length > 0) {
                    result = section.MenuItems.find(i => i.Id == dishId) as MenuItem;
                    return;
                }
            });
        }
        return result;
    }

    fillRestaurant(sessionId: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(this._baseUrl + ApiPaths.getRestaurantMenu + sessionId).pipe(
           tap((res: Restaurant) => this.restaurant = res),
           catchError(this.notificationsService.handleError<Restaurant>('fillRestaurant'))
        );
    }
}

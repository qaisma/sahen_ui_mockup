import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from './api-paths';
import { environment } from '../environments/environment';
import { MenuItem, Restaurant } from './models/restaurant.model';
import { Observable, of } from 'rxjs';
import { localRestaurant } from './sample.data'

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    // restaurant: Restaurant | undefined;
    private _restaurant: Restaurant | undefined;

    public get restaurant(): Restaurant {
        if (!this._restaurant)
            this.getRestaurant().subscribe(result => {
                this._restaurant = result;
                return this.restaurant;
            });
        return this._restaurant!;
    }

    public set value(v: Restaurant) {
        this._restaurant = v;
    }

    // restaurant!: Restaurant;
    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    // getMenuSectionItem(dishId: string): RestaurantMenuSectionItem {
    //     let result = new RestaurantMenuSectionItem();
    //     if (dishId == '') {
    //         return result;
    //     } else {
    //         if (!this.restaurant) {
    //             this.getRestaurant().subscribe(result => {
    //                 this._restaurant = result;
    //                 return this.getMenuSectionItem(dishId);
    //             });
    //         } else {
    //             this.restaurant.Menu.forEach(menu => {
    //                 menu.menuSections.forEach(section => {
    //                     if (section.menuItems.filter(i => i.id == dishId).length > 0) {
    //                         result = section.menuItems.find(i => i.id == dishId) as RestaurantMenuSectionItem;
    //                         return;
    //                     }
    //                 });
    //             });
    //         }
    //     }
    //     return result;
    // }


    getMenuSectionItem(dishId: string): MenuItem {
        let result = new MenuItem();
        if (!dishId) {
            alert('invalid data!');
        } else {
            if (!this.restaurant.Menu || !this.restaurant.Menu.MenuSections) {
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

    getRestaurant(): Observable<Restaurant> {
        return of(localRestaurant);
        // debugger;
        // return this.http.get<Restaurant>(this.baseUrl + ApiPaths.getRestaurantMenu);
    }

    // addToCart(product: Product) {
    //     this.items.push(product);
    // }

    // getItems() {
    //     return this.items;
    // }

    // clearCart() {
    //     this.items = [];
    //     return this.items;
    // }

    // getShippingPrices() {
    //     return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
    // }
}

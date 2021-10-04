import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from './api-paths';
import { environment } from '../environments/environment';
import { Restaurant } from './models/restaurant.model';
import { RestaurantMenuSectionItem } from './models/restaurant-menu-section-item.model'
import { CartItem, Cart } from './models/cart.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: Cart = new Cart();
    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    addToCart(menuSectionItem: RestaurantMenuSectionItem) {
        let cartItem = new CartItem();
        cartItem.itemId = menuSectionItem.id.toString();
        cartItem.quantity = 1;
        this.cart.items.push(cartItem);
    }

    getItems() {
        return this.cart.items;
    }

    clearCart() {
        this.cart.items = [];
    }
}

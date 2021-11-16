import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from './api-paths';
import { environment } from '../environments/environment';
import { MenuItem, MenuSection, Restaurant } from './models/restaurant.model';
import { CartItem, Cart } from './models/cart.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private itemsInCartSubject: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
    private itemsInCart: MenuItem[] = [];

    cart: Cart = new Cart();
    baseUrl = environment.baseUrl;
    totalCount = 0;

    constructor(
        private http: HttpClient
    ) {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }

    addToCart(item: MenuItem) {
        this.itemsInCartSubject.next([...this.itemsInCart, item]);
        // let cartItem = new CartItem();
        // cartItem.itemId = menuSectionItem.Id.toString();
        // cartItem.quantity = 1;
        // this.cart.items.push(cartItem);
        this.totalCount += 1;
    }

    removeFromCart(menuSectionItem: MenuItem) {
        this.totalCount -= 1;
    }

    getItems() {
        return this.itemsInCartSubject;
    }

    getCart(): Cart {
        let result = new Cart();
        this.itemsInCart.forEach(item => {
            const foundIndex = result.items.findIndex(ci => ci.itemId == item.Id);
            if (foundIndex >= 0) {
                result.items[foundIndex].quantity += 1;
            } else {
                const cartItem = new CartItem();
                cartItem.item = item;
                cartItem.itemId = item.Id;
                cartItem.quantity = 1;
                result.items.push(cartItem);
            }
        });
        return result;
    }

    clearCart() {
        this.itemsInCart = [];
    }
}

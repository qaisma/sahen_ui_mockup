import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from './api-paths';
import { environment } from '../environments/environment';
import { MenuItem, MenuSection, Restaurant } from './models/restaurant.model';
import { CartItem, Cart } from './models/cart.model';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _cart = new ReplaySubject<Cart>();
    private itemsInCartSubject: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
    private itemsInCart: MenuItem[] = [];

    get cart$(): Observable<Cart> {
        return this._cart.asObservable();
    }

    baseUrl = environment.baseUrl;
    totalCount = 0;

    constructor(
        private http: HttpClient
    ) {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
        this.updateCart();
    }

    addToCart(item: MenuItem) {
        this.itemsInCartSubject.next([...this.itemsInCart, item]);
        this.totalCount += 1;
        this.updateCart();
    }

    removeFromCart(item: MenuItem) {
        const index = this.itemsInCart.findIndex(i => i.Id == item.Id);
        this.itemsInCart.splice(index, 1);
        this.totalCount -= 1;
        this.updateCart();
    }

    getItems() {
        return this.itemsInCartSubject;
    }

    updateCart():void {
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
        this._cart.next(result);
        //for http calls:
        // .pipe(tap)
    }

    // updateCart(): void {
    //     const cart = this.getCart();
    //     this._cart.next(cart);
    // }

    increseQuantity(index: number): void {
        const menuItem = this.itemsInCart[index];
        this.itemsInCart.push(menuItem);
        this.updateCart();
    }

    decreseQuantity(index: number): void {
        this.itemsInCart.splice(index, 1);
        this.updateCart();
    }

    clearCart() {
        this.itemsInCart = [];
    }
}

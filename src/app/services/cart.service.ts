import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaths } from '../api-paths';
import { environment } from '../../environments/environment';
import { MenuItem, MenuSection, Restaurant } from '../models/restaurant.model';
import { CartItem, Cart } from '../models/cart.model';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private _cart = new ReplaySubject<Cart>();
    private _itemsInCartSubject: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([]);
    private _itemsInCart: MenuItem[] = [];

    get cart$(): Observable<Cart> {
        return this._cart.asObservable();
    }

    baseUrl = environment.baseUrl;
    totalCount = 0;

    constructor(
        private http: HttpClient
    ) {
        this._itemsInCartSubject.subscribe(_ => this._itemsInCart = _);
        this.updateCart();
    }

    addToCart(item: MenuItem) {
        this._itemsInCartSubject.next([...this._itemsInCart, item]);
        this.totalCount += 1;
        this.updateCart();
    }

    removeFromCart(item: MenuItem) {
        const index = this._itemsInCart.findIndex(i => i.Id == item.Id);
        this._itemsInCart.splice(index, 1);
        this.totalCount -= 1;
        this.updateCart();
    }

    getItems() {
        return this._itemsInCartSubject;
    }

    updateCart():void {
        let result = new Cart();
        this._itemsInCart.forEach(item => {
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
    }

    increseQuantity(index: number): void {
        const menuItem = this._itemsInCart[index];
        this._itemsInCart.push(menuItem);
        this.updateCart();
    }

    decreseQuantity(index: number): void {
        this._itemsInCart.splice(index, 1);
        this.updateCart();
    }

    clearCart() {
        this._itemsInCart = [];
    }
}

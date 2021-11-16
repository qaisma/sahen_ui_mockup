import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart, CartItem } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingCart = new Cart();


  constructor(private cartService: CartService) {
    //temp
    if (localStorage['cart']) {
      this.shoppingCart = JSON.parse(localStorage['cart']);
    } else {

      this.shoppingCart = this.cartService.getCart();
      localStorage['cart'] = JSON.stringify(this.shoppingCart);
    }
    // this.shoppingCartItems$ = this.cartService.getItems();
    // this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }
  ngOnInit(): void {
  }

  increaseQuantity(index: number): void {
    let cartItem = this.shoppingCart.items[index];
    cartItem.quantity += 1;
  }

  decreaseQuantity(index: number): void {
    let cartItem = this.shoppingCart.items[index];
    if (cartItem.quantity == 1) {
      this.shoppingCart.items.splice(index, 1);
    } else {
      cartItem.quantity -= 1;
    }
  }

  getTotalPrice(): number {
    let result = 0;
    this.shoppingCart.items.forEach(cartItem => {
      result += (cartItem.item.Price + cartItem.quantity);
    });
    return result;
  }
}

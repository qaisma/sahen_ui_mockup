import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { Cart, CartItem } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit {
  shoppingCart = new Cart();

  constructor(private cartService: CartService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.cartService.cart$
      .subscribe(cart => {
        this.shoppingCart = cart as Cart;
      });
  }

  ngAfterViewInit(): void {
    this.cartService.updateCart();
    if (!this.shoppingCart.items || this.shoppingCart.items.length == 0) {
      this.router.navigate(['/']);
    }
  }

  increaseQuantity(index: number): void {
    this.cartService.increseQuantity(index);
  }

  decreaseQuantity(index: number): void {
    this.cartService.decreseQuantity(index);
  }

  getTotalPrice(): number {
    let result = 0;
    this.shoppingCart.items.forEach(cartItem => {
      result += (cartItem.item.Price * cartItem.quantity);
    });
    return result;
  }
}


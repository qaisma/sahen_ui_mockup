import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { CartService } from '../services/cart.service';
import { MenuItem, Restaurant } from '../models/restaurant.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  shoppingCartItems$: Observable<MenuItem[]> = of([]);
  shoppingCartItems: MenuItem[] = [];

  restaurant: Restaurant = new Restaurant();;
  totalCount = 0;

  constructor(
    private restaurantService: RestaurantService,
    private cartService: CartService,
  ) {
    this.totalCount = cartService.totalCount;
    this.shoppingCartItems$ = this.cartService.getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit(): void {
    this.restaurant = this.restaurantService.restaurant;
  }
  getTotalCount(): number {
    return this.shoppingCartItems$ ? this.shoppingCartItems.length : 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { CartService } from '../services/cart.service';
import { MenuItem, MenuSection, Restaurant } from '../models/restaurant.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu-sections',
  templateUrl: './menu-sections.component.html',
  styleUrls: ['./menu-sections.component.scss']
})
export class MenuSectionsComponent implements OnInit {

  sections: MenuSection[] = []
  restaurant: Restaurant = new Restaurant();

  constructor(
    private itemsSerive: RestaurantService,
    private cartService: CartService,
    private activateRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.activateRoute.data.subscribe(data => {
      this.restaurant = data.restaurant
    });
  }

  ngOnInit(): void {
    this.sections = this.getRestaurantSections();
  }

  getRestaurantSections(): MenuSection[] {
    let result: MenuSection[] = [];
    if (this.restaurant.Menu?.MenuSections?.length > 0) {
      //   this.restaurant.Menu.MenuSections.forEach(menu => {
      //   result = [...menu.menuSections];
      // });
      result = this.restaurant.Menu.MenuSections;
    }
    return result;
  }

  goToDish(dish: MenuItem): void {

  }

  addToCart(dish: MenuItem): void {
    this.cartService.addToCart(dish);
    this._snackBar.open(dish.ItemName + ' added to cart', 'Close', { duration: 3000 });
  }
}

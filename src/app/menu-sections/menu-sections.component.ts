import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../items.service';
import { CartService } from '../cart.service';
import { MenuItem, MenuSection, Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-menu-sections',
  templateUrl: './menu-sections.component.html',
  styleUrls: ['./menu-sections.component.scss']
})
export class MenuSectionsComponent implements OnInit {

  sections: MenuSection[] = []
  restaurant: Restaurant = new Restaurant();

  constructor(
    private itemsSerive: ItemsService,
    private cartService: CartService,
    private activateRoute: ActivatedRoute
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
    if (this.restaurant && this.restaurant.Menu && this.restaurant.Menu.MenuSections && this.restaurant.Menu.MenuSections.length > 0) {
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
  }
}

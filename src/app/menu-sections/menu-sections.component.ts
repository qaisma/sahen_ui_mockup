import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../items.service';
import { RestaurantMenuSectionItem } from '../models/restaurant-menu-section-item.model';
import { RestaurantMenuSectionModel } from '../models/restaurant-menu-section.model';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantResolver } from '../restaurant-seolver';

@Component({
  selector: 'app-menu-sections',
  templateUrl: './menu-sections.component.html',
  styleUrls: ['./menu-sections.component.scss']
})
export class MenuSectionsComponent implements OnInit {

  sections: RestaurantMenuSectionModel[] = []
  restaurant: Restaurant = new Restaurant();

  constructor(
    private itemsSerive: ItemsService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.data.subscribe(data => {
      this.restaurant = data.restaurant
    });
  }

  ngOnInit(): void {
    this.sections = this.getRestaurantSections();
  }

  getRestaurantSections(): RestaurantMenuSectionModel[] {
    let result: RestaurantMenuSectionModel[] = [];
    this.restaurant.menus.forEach(menu => {
      result = [...menu.menuSections];
    });
    return result;
  }

  goToDish(dish: RestaurantMenuSectionItem): void {

  }

  addToCart(dish: RestaurantMenuSectionItem): void {
    window.alert('Dish has been added to cart!');
  }
}

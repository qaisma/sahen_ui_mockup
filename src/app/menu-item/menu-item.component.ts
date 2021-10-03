import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { RestaurantMenuSectionItem } from '../models/restaurant-menu-section-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  dish: RestaurantMenuSectionItem;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService) {
    this.dish = new RestaurantMenuSectionItem();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const dishId = routeParams.get('id') || '';

    this.dish = this.itemsService.getMenuSectionItem(dishId);
  }

  addToCart(dish: RestaurantMenuSectionItem): void {
    window.alert('Dish has been added to cart!');
  }

}

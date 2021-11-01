import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { MenuItem } from '../models/restaurant.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  dish: MenuItem;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService) {
    this.dish = new MenuItem();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const dishId = routeParams.get('id') || '';

    this.dish = this.itemsService.getMenuSectionItem(parseInt(dishId));
  }

  addToCart(dish: MenuItem): void {
    window.alert('Dish has been added to cart!');
  }

}

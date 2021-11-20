import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
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
    private itemsService: ItemsService,
    private cartService: CartService,
    private _snackBar: MatSnackBar) {
    this.dish = new MenuItem();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const dishId = routeParams.get('id') || '';

    this.dish = this.itemsService.getMenuSectionItem(dishId);
  }


  addToCart(dish: MenuItem): void {
    this.cartService.addToCart(dish);
    this._snackBar.open(dish.ItemName + ' added to cart', 'Close', { duration: 3000 });
  }

}

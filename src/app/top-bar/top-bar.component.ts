import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  restaurant: Restaurant

  constructor(
    private itemsService: ItemsService
  ) {
    this.restaurant = new Restaurant();
  }

  ngOnInit(): void {
    this.itemsService.getRestaurant().subscribe(res => {
      this.restaurant = res;
    });
    // this.restaurant = this.itemsService.restaurant;
  }

}

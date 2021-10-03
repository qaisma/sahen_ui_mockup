import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ItemsService } from "./items.service";
import { Restaurant } from "./models/restaurant.model";

@Injectable({ providedIn: 'root' })
export class RestaurantResolver implements Resolve<Restaurant> {
  constructor(private service: ItemsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getRestaurant();
    // return this.service.getRestaurant(route.paramMap.get('id'));
  }
}
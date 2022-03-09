import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AppComponent } from "./app.component";
import { RestaurantService } from "./services/restaurant.service";
import { Restaurant } from "./models/restaurant.model";

@Injectable({ providedIn: 'root' })
export class RestaurantResolver implements Resolve<Restaurant> {
  constructor(private service: RestaurantService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const sessionId = localStorage.sessionId;
    this.service.fillRestaurant(sessionId);
  }
}
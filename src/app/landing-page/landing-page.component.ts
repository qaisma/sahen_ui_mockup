import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeStoreService } from '../services/code-store.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  tableCode = 'ADAE73DD-5DCF-4633-B92B-0E16AE6CAD48'

  constructor(private codeStoreService: CodeStoreService,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
    // //temp
    // if (localStorage.getItem('sessionId')) {
    //   this.router.navigate(['/sections']);
    // }

    let tableCode = this.route.snapshot.queryParams['code'];
    //temp
    tableCode = this.tableCode;
    if (tableCode) {
      this.createSession(tableCode.valueOf());
    } else {
      //handle error no table code
    }
  }

  createSession(tableCode: string): void {
    this.codeStoreService.getSession(tableCode).subscribe(
      sessionId => {
        this.codeStoreService.sessionId = sessionId;
        console.log('sessionId',sessionId);
        this.restaurantService.fillRestaurant(sessionId).subscribe(res => {
          this.router.navigate(['/sections']);
        });
      }
    )
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuSectionsComponent } from './menu-sections/menu-sections.component';
import { ItemsService } from './items.service';
import { CartService } from './cart.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantResolver } from './restaurant-seolver';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuSectionsComponent,
    MenuItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot([
      {
        path: '', component: MenuSectionsComponent,
        resolve: {
          restaurant: RestaurantResolver
        }
      },
      { path: 'item/:id', component: MenuItemComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [ItemsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

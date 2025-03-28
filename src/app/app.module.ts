import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrderDataComponent } from './features/admin/order-data/order-data.component';
import { LoadFileComponent } from './features/admin/load-file/load-file.component';
import { ShippingComponent } from './features/admin/shipping/shipping.component';
import { NavbarComponent } from './features/admin/navbar/navbar.component';
import { ShippingDataComponent } from './features/admin/shipping-data/shipping-data.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDataComponent,
    LoadFileComponent,
    ShippingComponent,
    NavbarComponent,
    ShippingDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

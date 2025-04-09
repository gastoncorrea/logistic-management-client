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
import { RiderFormComponent } from './features/admin/rider-form/rider-form.component';
import { RiderListComponent } from './features/admin/rider-list/rider-list.component';
import { DeliveredDataComponent } from './features/admin/delivered-data/delivered-data.component';
import { SaveDeliveryComponent } from './features/admin/save-delivery/save-delivery.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDataComponent,
    LoadFileComponent,
    ShippingComponent,
    NavbarComponent,
    ShippingDataComponent,
    RiderFormComponent,
    RiderListComponent,
    DeliveredDataComponent,
    SaveDeliveryComponent
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

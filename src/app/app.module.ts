import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { OrderDataComponent } from './features/admin/order-data/order-data.component';
import { LoadFileComponent } from './features/admin/load-file/load-file.component';
import { ShippingComponent } from './features/admin/shipping/shipping.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OrderDataComponent,
    LoadFileComponent,
    ShippingComponent
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

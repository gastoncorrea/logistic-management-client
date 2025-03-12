import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrderDataComponent } from './features/admin/order-data/order-data.component';
import { LoadFileComponent } from './features/admin/load-file/load-file.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDataComponent,
    LoadFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

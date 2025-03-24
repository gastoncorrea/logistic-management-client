import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadFileComponent } from './features/admin/load-file/load-file.component';
import { OrderDataComponent } from './features/admin/order-data/order-data.component';
import { ShippingComponent } from './features/admin/shipping/shipping.component';


const routes: Routes = [
    { path: '', component: LoadFileComponent },  // Página principal
    { path: 'order', component: OrderDataComponent },  // Página "Acerca de"
    { path: 'shipping/:id', component: ShippingComponent } // Página 404
  ];
  

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
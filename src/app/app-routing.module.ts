import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadFileComponent } from './features/admin/load-file/load-file.component';
import { OrderDataComponent } from './features/admin/order-data/order-data.component';
import { ShippingComponent } from './features/admin/shipping/shipping.component';
import { ShippingDataComponent } from './features/admin/shipping-data/shipping-data.component';
import { RiderFormComponent } from './features/admin/rider-form/rider-form.component';
import { RiderListComponent } from './features/admin/rider-list/rider-list.component';
import { DeliveredDataComponent } from './features/admin/delivered-data/delivered-data.component';
import { SaveDeliveryComponent } from './features/admin/save-delivery/save-delivery.component';
import { NotDeliveredDataComponent } from './features/admin/not-delivered-data/not-delivered-data.component';
import { NotDeliveredFormComponent } from './features/admin/not-delivered-form/not-delivered-form.component';


const routes: Routes = [
  { path: '', component: LoadFileComponent },  // Página principal

  {
    path: 'order',
    children: [
      { path: 'in-progress', component: OrderDataComponent },
      { path: 'sent', component: ShippingDataComponent },
      { path: 'delivered', component: DeliveredDataComponent},
      { path: 'not-delivered/form/:id', component: NotDeliveredFormComponent },
      { path: 'not-delivered/list', component: NotDeliveredDataComponent },
      { path: 'delivered/form/:id', component: SaveDeliveryComponent}
    ]
  },
  {
    path: 'rider',
    children:[
      {path:'post', component:RiderFormComponent},
      {path:'list', component:RiderListComponent}
    ]
  },

  { path: 'shipping', component: ShippingComponent },
  { path: 'shipping/:id', component: ShippingComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
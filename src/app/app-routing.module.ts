import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadFileComponent } from './features/admin/load-file/load-file.component';
import { OrderDataComponent } from './features/admin/order-data/order-data.component';
import { ShippingComponent } from './features/admin/shipping/shipping.component';
import { ShippingDataComponent } from './features/admin/shipping-data/shipping-data.component';


const routes: Routes = [
  { path: '', component: LoadFileComponent },  // Página principal

  {
    path: 'order',
    children: [
      { path: 'in-progress', component: OrderDataComponent },
      { path: 'sent', component: ShippingDataComponent },
      { path: 'delivered', component: OrderDataComponent },
      { path: 'not-delivered', component: OrderDataComponent }
    ]
  },

  { path: 'shipping/:id', component: ShippingComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/core/services/order-data.service';

@Component({
  selector: 'app-shipping-data',
  templateUrl: './shipping-data.component.html',
  styleUrls: ['./shipping-data.component.css']
})
export class ShippingDataComponent implements OnInit {
  shippingData: any;
  shippingDetail: any;
  orderDetailView: any;

  constructor(private orderDataService:OrderDataService) { }

  ngOnInit(): void {
    this.orderDataService.ordersData("sent").subscribe(res=>{
      this.shippingData = res;
      console.log(res);
    })
  }

  selectShipping(shipping: any) {
    console.log("probando el evento: ", shipping);

  }
}


import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/core/services/order-data.service';

@Component({
  selector: 'app-delivered-data',
  templateUrl: './delivered-data.component.html',
  styleUrls: ['./delivered-data.component.css']
})
export class DeliveredDataComponent implements OnInit {
  deliveredData:any = [];
  deliveryDetail:any = [];

  constructor(private orderDataService: OrderDataService) { }

  ngOnInit(): void {
    this.orderDataService.ordersDataDelivered().subscribe((res)=>{
      this.deliveredData = res;
    })
  }

  selectDelivered(delivey:any){

  }

}

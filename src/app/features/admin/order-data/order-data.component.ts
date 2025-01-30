import { Component, OnInit } from '@angular/core';
import {OrderDataService} from '../../../core/services/order-data.service';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.css']
})
export class OrderDataComponent implements OnInit {

  constructor(private orderDataService:OrderDataService) { }
  orderData:any = [];
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.orderDataService.ordersData().subscribe((res)=>{
      this.orderData = res;
      console.log(res);
    })
  }

}

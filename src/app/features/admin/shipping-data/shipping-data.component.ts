import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/core/services/order-data.service';
import { ShippingDataService } from 'src/app/core/services/shipping-data.service';

@Component({
  selector: 'app-shipping-data',
  templateUrl: './shipping-data.component.html',
  styleUrls: ['./shipping-data.component.css']
})
export class ShippingDataComponent implements OnInit {
  shippingData: any;
  shippingDetail: any = [];
  shippingDetailView: any;

  constructor(private orderDataService:OrderDataService,private shippingDataService: ShippingDataService) { }

  ngOnInit(): void {
    this.orderDataService.ordersData("sent").subscribe(res=>{
      this.shippingData = res;
      console.log(res);
    })
  }

  selectShipping(shipping: any) {
    console.log("probando el evento: ", shipping);
    console.log(this.shippingDetail);
    this.shippingDataService.encontrar_envio(shipping.id_pedido).subscribe(res=>{
      this.shippingDetail = res;
      this.shippingDetail.nro_pedido = shipping.nro_pedido;
      this.shippingDetail.estado = shipping.estado;
      console.log(this.shippingDetail)
    })
  }
}


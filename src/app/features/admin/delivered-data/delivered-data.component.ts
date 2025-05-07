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

  selectDelivered(delivery:any){
    this.deliveryDetail.nro_pedido = delivery.nro_pedido;
    this.deliveryDetail.fecha_entrega = delivery.fecha_entrega;
    this.deliveryDetail.recibe_nombre = delivery.recibe_nombre;
    this.deliveryDetail.recibe_dni = delivery.recibe_dni;
    this.deliveryDetail.rider_nombre = delivery.rider_nombre;
    this.deliveryDetail.descripcion_entrega = delivery.descripcion_entrega;
  }

}

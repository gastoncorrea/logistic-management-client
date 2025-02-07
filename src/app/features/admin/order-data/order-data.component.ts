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
  orderDetail:any = [];
  orderDetailView:any;
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.orderDataService.ordersData().subscribe((res)=>{
      this.orderData = res;
      console.log(res);
    })
  }

  selectOrder(pedido:any){
    console.log("probando el evento: ",pedido);
    this.orderDataService.orderDetail(pedido.id_pedido).subscribe((res)=>{
      this.orderDetail = res;
      console.log(this.orderDetail);
      this.orderDetailView = {
        nro_pedido : pedido.nro_pedido,
        fecha:pedido.fecha,
        nombre_cliente: pedido.id_cliente,
        detalle_pedido: this.orderDetail,
        ubicacion: pedido.id_ubicacion
      }
      console.log(this.orderDetailView.detalle_pedido)
    })
    ;
  }
}

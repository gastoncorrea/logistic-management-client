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
  orderDetailView:any = {};
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.orderDataService.ordersData().subscribe((res)=>{
      this.orderData = res.en_proceso;
      console.log(res);
    })
  }

  selectOrder(pedido:any){
    console.log("probando el evento: ",pedido);
    this.orderDataService.orderDetail(pedido.id_pedido).subscribe((res)=>{
      this.orderDetail = res;
      console.log(this.orderDetail);
      this.orderDetailView = {
        id_pedido: pedido.id_pedido,
        nro_pedido : pedido.nro_pedido,
        fecha:pedido.fecha,
        nombre_cliente: pedido.nombre_cliente,
        email: pedido.email,
        detalle_pedido: this.orderDetail,
        provincia: pedido.provincia,
        direccion: pedido.direccion,
        direccion2: pedido.direccion2,
        cp: pedido.cp
      }
      console.log(this.orderDetailView.detalle_pedido)
    })
    ;
  }
}

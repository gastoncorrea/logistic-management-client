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
  orderDetailView:any = {
    nro_pedido : "#234764",
    fecha:"12-02-2025",
    nombre_cliente: "Gaston Correa",
    detalle_pedido: [{
      producto: "Alfombra para poner abajo de la puerta",
      cantidad: 2
    },{
      producto: "Alfombra para poner abajo de la puerta",
      cantidad: 2
    }],
    direccion: "Mendoza 2139",
    direccion2: "1er piso dpto 'A'",
    localidad: "San Miguel de Tucuman",
    cp: "4000"
  };
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
        nombre_cliente: pedido.nombre_cliente,
        detalle_pedido: this.orderDetail,
        localidad: pedido.localidad,
        direccion: pedido.direccion,
        direccion2: pedido.direccion2,
        cp: pedido.cp
      }
      console.log(this.orderDetailView.detalle_pedido)
    })
    ;
  }
}

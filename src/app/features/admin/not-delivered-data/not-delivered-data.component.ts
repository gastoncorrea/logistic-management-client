import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/core/services/order-data.service';

@Component({
  selector: 'app-not-delivered-data',
  templateUrl: './not-delivered-data.component.html',
  styleUrls: ['./not-delivered-data.component.css']
})
export class NotDeliveredDataComponent implements OnInit {
  notDeliveredData: any = null;
  selectedOrders: any[] = [];
  orderDetail: any;
  orderDetailView: any;

  constructor(private orderDataService: OrderDataService) { }

  ngOnInit(): void {
    this.orderDataService.ordersDataNotDelivered().subscribe((resp) => {
      console.log(resp);
      this.notDeliveredData = resp;
    })

  }

  selectOrder(pedido: any) {
    console.log("probando el evento: ", pedido);
    this.orderDetailView = {
      nro_pedido: pedido.nro_pedido,
      fecha: pedido.fecha_devolucion,
      descripcion_entrega: pedido.descripcion_entrega
    }

  }

}

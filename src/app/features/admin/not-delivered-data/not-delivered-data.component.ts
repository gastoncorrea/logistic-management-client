import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/core/services/order-data.service';

@Component({
  selector: 'app-not-delivered-data',
  templateUrl: './not-delivered-data.component.html',
  styleUrls: ['./not-delivered-data.component.css']
})
export class NotDeliveredDataComponent implements OnInit {
  notDeliveredData:any = null;
  selectedOrders: any[] = [];
  orderDetail:any;
  orderDetailView:any;

  constructor(private orderDataService:OrderDataService) { }

  ngOnInit(): void {
    this.orderDataService.ordersDataNotDelivered().subscribe( (resp) =>{
      console.log(resp);
      this.notDeliveredData = resp;
    })
    
  }

  isSelected(order: any): boolean {
    return this.selectedOrders.some(o => o.id_pedido === order.id_pedido);
  } 

  toggleSelection(order: any): void {
    if (this.isSelected(order)) {
      this.selectedOrders = this.selectedOrders.filter(o => o.id_pedido !== order.id_pedido);
    } else {
      this.selectedOrders.push(order);
    }
    console.log(this.selectedOrders);
  }

  toggleAllSelection(event: any): void {
    if (event.target.checked) {
      this.selectedOrders = [...this.notDeliveredData]; // seleccionar todos
    } else {
      this.selectedOrders = []; // deseleccionar todos
    }
    console.log(this.selectedOrders);
  }

  selectOrder(pedido: any) {
    console.log("probando el evento: ", pedido);
    this.orderDataService.orderDetail(pedido.id_pedido).subscribe((res) => {
      this.orderDetail = res;
      console.log(this.orderDetail);
      this.orderDetailView = {
        id_pedido: pedido.id_pedido,
        nro_pedido: pedido.nro_pedido,
        fecha: pedido.fecha,
        nombre_cliente: pedido.nombre_cliente,
        email: pedido.email,
        detalle_pedido: this.orderDetail,
        provincia: pedido.provincia,
        cp: pedido.cp
      }
      console.log(this.orderDetailView.detalle_pedido);
      
    })
      ;
  }

}

import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../../core/services/order-data.service';
import { ActivatedRoute } from '@angular/router';
import { ShippingService } from 'src/app/core/services/shipping.service';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.css']
})
export class OrderDataComponent implements OnInit {
  status: string = '';
  selectedOrders: any[] = [];

  constructor(private orderDataService: OrderDataService,
              private route: ActivatedRoute,
              private shippingService : ShippingService) { }
  orderData: any = [];
  orderDetail: any = [];
  orderDetailView: any = {};
  ngOnInit(): void {
    this.getData();
  }

  getData() {
      this.orderDataService.ordersDataProgress().subscribe((res) => {
        this.orderData = res;
        console.log(res);
      }) // Llamar al método para obtener los pedidos
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
      this.selectedOrders = [...this.orderData]; // seleccionar todos
    } else {
      this.selectedOrders = []; // deseleccionar todos
    }
    console.log(this.selectedOrders);
  }

  multipleShipping(){
    
    if(this.selectedOrders.length > 0){

      this.shippingService.setOrdersShipping(this.selectedOrders);
      this.shippingService.selectedOrders$.subscribe(pedidos => {
        console.log(pedidos);
           })
    }
  }
}

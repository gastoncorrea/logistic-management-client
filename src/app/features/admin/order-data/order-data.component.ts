import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../../core/services/order-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingService } from 'src/app/core/services/shipping.service';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.css']
})
export class OrderDataComponent implements OnInit {
  isLoading = true;
  status: string = '';
  selectedOrders: any[] = [];
  id_pedidos_seleccionados: String[] = [];

  constructor(private orderDataService: OrderDataService,
              private route: Router,
              private shippingService : ShippingService) { }
  orderData: any = [];
  orderDetail: any = [];
  orderDetailView: any = {};
  ngOnInit(): void {
    console.log(this.isLoading);
    this.getData();
    this.isLoading = false;
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

  send_shipping(detail:any){
    this.id_pedidos_seleccionados = [];
    this.id_pedidos_seleccionados.push(detail.nro_pedido);
    console.log(this.id_pedidos_seleccionados);
    if(this.id_pedidos_seleccionados.length == 1){
      this.shippingService.setOrdersShipping(this.id_pedidos_seleccionados);
      this.route.navigate(['/shipping'])
    }
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
      this.id_pedidos_seleccionados = this.selectedOrders.map(p => p.nro_pedido);
      this.shippingService.setOrdersShipping(this.id_pedidos_seleccionados);
      this.route.navigate(['/shipping'])
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../../core/services/order-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.css']
})
export class OrderDataComponent implements OnInit {
  status: string = '';

  constructor(private orderDataService: OrderDataService, private route: ActivatedRoute) { }
  orderData: any = [];
  orderDetail: any = [];
  orderDetailView: any = {};
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.route.url.subscribe(urlSegments => {
      // Obtener la última parte de la URL, que es el estado
      const path = urlSegments[urlSegments.length - 1].path;
      this.status = path;  // 'in-progress', 'sent', 'delivered', 'not-delivered'
      this.orderDataService.ordersData(this.status).subscribe((res) => {
        this.orderData = res;
        console.log(res);
      }) // Llamar al método para obtener los pedidos
    });
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
        direccion: pedido.direccion,
        direccion2: pedido.direccion2,
        cp: pedido.cp
      }
      console.log(this.orderDetailView.detalle_pedido)
    })
      ;
  }
}

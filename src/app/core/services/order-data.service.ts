import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(private http:HttpClient) { }
  URL = "http://localhost:5000/";
  
  ordersData(status:string):Observable<any>{
    return this.http.get<any[]>(this.URL+'pedidos/'+status)
  }

  orderDetail(id_pedido:number):Observable<any>{
    console.log(this.URL+'detail/'+id_pedido);
    return this.http.get<any>(this.URL+'detail/'+id_pedido);
  }

  orderFindById(id_pedido:number):Observable<any>{
    console.log(this.URL+'order/'+id_pedido);
    return this.http.get<any>(this.URL+'order/'+id_pedido);
  }
}

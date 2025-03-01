import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  constructor(private http:HttpClient) { }
  URL = "http://localhost:5000/"
  ordersData():Observable<any>{
    return this.http.get(this.URL)
  }

  orderDetail(id_pedido:number):Observable<any>{
    console.log(this.URL+id_pedido);
    return this.http.get<any>(this.URL+id_pedido);
  }
}

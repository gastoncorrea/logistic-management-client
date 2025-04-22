import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private selectedOrders: any[] = [];
  URL = "http://localhost:5000/shipping";

  constructor(private http:HttpClient) { }

  setOrdersShipping(orders:any[]){
    this.selectedOrders = orders;
  }

  getOrdersShipping():any[]{
    return this.selectedOrders;
  }

  clearOrders(){
    this.selectedOrders = [];
  }

  saveShipping(formShipping:any): Observable<any>{
    return this.http.post(this.URL, formShipping);
  }

  getShipping(id:number):Observable<any>{
    return this.http.get(this.URL+'/find/'+id);
  }
}

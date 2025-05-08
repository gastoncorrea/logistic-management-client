import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private pedidosSubject = new BehaviorSubject<String[]>([]);
  selectedOrders$ = this.pedidosSubject.asObservable();

  URL = environment.apiUrl+"shipping";

  constructor(private http:HttpClient) { }

  setOrdersShipping(orders:String[]){
    this.pedidosSubject.next(orders);
  }

  saveShipping(formShipping:any): Observable<any>{
    return this.http.post(this.URL, formShipping);
  }

  getShipping(id:number):Observable<any>{
    return this.http.get(this.URL+'/find/'+id);
  }
}

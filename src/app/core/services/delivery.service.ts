import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }
  URL = "http://localhost:5000/delivered/";

  save_delivery(delivery:any):Observable<any>{
    return this.http.post(this.URL+'save',delivery);
  }

  save_not_delivery(returned:any):Observable<any>{
    return this.http.post(this.URL+'not/save', returned);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingDataService {
  URL = "http://localhost:5000/shipping/data/";
  constructor(private http:HttpClient) { }

  encontrar_envio(id:number):Observable<any>{
    return this.http.get<any>(this.URL+id);
  }
}

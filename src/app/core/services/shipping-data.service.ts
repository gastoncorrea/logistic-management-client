import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingDataService {
  URL = environment.apiUrl+"shipping/data/";
  constructor(private http:HttpClient) { }

  encontrar_envio(id:number):Observable<any>{
    return this.http.get<any>(this.URL+id);
  }
}

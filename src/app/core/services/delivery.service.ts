import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }
  URL = environment.apiUrl+"delivered/";

  save_delivery(delivery:any):Observable<any>{
    return this.http.post(this.URL+'save',delivery);
  }

  save_not_delivery(returned:any):Observable<any>{
    return this.http.post(this.URL+'not/save', returned);
  }
}

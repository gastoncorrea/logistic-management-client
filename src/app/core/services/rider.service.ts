import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  URL = "http://localhost:5000/riders/";

  constructor(private http:HttpClient) { }

  getRiders(): Observable<any>{
    return this.http.get(this.URL+'get');
  }

  saveRider(rider:any):Observable<any>{
    return this.http.post(this.URL+'save', rider);
  }

  getRiderShipping(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.URL+'shipping/'+id);
  }
}

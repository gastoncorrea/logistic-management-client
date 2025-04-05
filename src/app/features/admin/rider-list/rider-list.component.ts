import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/core/services/rider.service';

@Component({
  selector: 'app-rider-list',
  templateUrl: './rider-list.component.html',
  styleUrls: ['./rider-list.component.css']
})
export class RiderListComponent implements OnInit {
  riderData:any=[];
  riderDetailView:any=[];
  riderShipping:any=[];

  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
    this.riderService.getRiders().subscribe((res)=>{
      console.log(res);
      this.riderData = res;
    })
  }

  selectRider(rider:any){
    this.riderDetailView.nombre = rider.nombre;
    this.riderDetailView.apellido = rider.apellido;
    this.riderDetailView.email = rider.email;

    this.riderService.getRiderShipping(rider.id_rider).subscribe((res)=>{
      console.log(res);
      this.riderShipping = res;
    })
  }

}

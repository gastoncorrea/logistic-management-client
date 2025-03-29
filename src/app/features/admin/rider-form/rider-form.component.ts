import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RiderService } from 'src/app/core/services/rider.service';

@Component({
  selector: 'app-rider-form',
  templateUrl: './rider-form.component.html',
  styleUrls: ['./rider-form.component.css']
})
export class RiderFormComponent implements OnInit {
  form: FormGroup
  constructor(private formBuilder: FormBuilder,private riderService: RiderService, private router:Router) { 
    this.form = this.formBuilder.group(
      {
        nombre : ["",[Validators.required, Validators.maxLength(50)]],
        apellido : ["",[Validators.required, Validators.maxLength(50)]],
        email : ["",[Validators.required, Validators.maxLength(50), Validators.email]],
        dni : ["",[Validators.required, Validators.maxLength(50)]],
        vehiculo : ["",[Validators.required, Validators.maxLength(50)]],
        cedula : ["",[Validators.required, Validators.maxLength(50)]]
      }
    )
  }

  ngOnInit(): void {
  }

  get Nombre(){
    return this.form.get("nombre");
  }
  get Apellido(){
    return this.form.get("apellido");
  }
  get Email(){
    return this.form.get("email");
  }
  get Dni(){
    return this.form.get("dni");
  }
  get Vehiculo(){
    return this.form.get("vehiculo");
  }
  get Cedula(){
    return this.form.get("cedula");
  }

  sendForm(){
    if(this.form.valid){
      console.log(this.form.value);
      this.riderService.saveRider(this.form.value).subscribe(res =>{
        alert(res);
        this.router.navigate(["/rider/list"])
      })
    }
  }

}

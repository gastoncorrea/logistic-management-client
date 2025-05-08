import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'src/app/core/services/delivery.service';
import { ShippingService } from 'src/app/core/services/shipping.service';

@Component({
  selector: 'app-save-delivery',
  templateUrl: './save-delivery.component.html',
  styleUrls: ['./save-delivery.component.css']
})
export class SaveDeliveryComponent implements OnInit {
  isLoading =true;
  form: FormGroup;
  envio:any = [];

  constructor(private formBuilder: FormBuilder,
              private deliveryService:DeliveryService,
              private activateRoute: ActivatedRoute,
              private shippingService : ShippingService,
              private router: Router
  ) { 
    this.form = this.formBuilder.group(
      {
        entrega_dni : ['',[Validators.required, Validators.maxLength(8),Validators.minLength(8)]],
        entrega_nombre : ['', [Validators.required, Validators.maxLength(50)]],
        descripcion : ['', [Validators.maxLength(50)]],
        entrega_rider : ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
        nro_pedido : ['', [Validators.required]]      
      }
    )
  }

  get Entrega_dni(){
    return this.form.get('entrega_dni');
  }
  get Entrega_nombre(){
    return this.form.get('entrega_nombre');
  }
  get Descripcion(){
    return this.form.get('descripcion');
  }
  get Entrega_rider(){
    return this.form.get('entrega_rider');
  }
  get Nro_pedido(){
    return this.form.get('nro_pedido');
  }

  ngOnInit(): void {
    // Obtener el ID del pedido desde la URL
    const idParam = this.activateRoute.snapshot.paramMap.get('id');

    if (idParam) {
      const id_envio = +idParam;
      // Buscar el pedido en el servicio y llenar el formulario
      this.shippingService.getShipping(id_envio).subscribe(res => {
        console.log(res)
        this.envio = res;
        this.form.patchValue({
          entrega_rider: this.envio.id_rider, 
          nro_pedido: this.envio.nro_pedido, 
        });
      });
    }

    this.isLoading = false;
  }

  sendForm(){
    console.log(this.form.valid);
    if(this.form.valid){
      console.log(this.form.value);
      this.isLoading = true;
      this.deliveryService.save_delivery(this.form.value).subscribe({

        next: (res) => {
          this.isLoading = false;
          alert(`✅${res.message}\n ${res.email}`)},

        error: (error)=>{
          alert(error.error);
        },

        complete:() => {
          this.router.navigate(["/order/delivered"])
        }
      });
    }
  }

}

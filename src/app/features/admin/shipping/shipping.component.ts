import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDataService } from "src/app/core/services/order-data.service"
import { RiderService } from 'src/app/core/services/rider.service';
import { ShippingService } from 'src/app/core/services/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  form: FormGroup;
  idPedido!: number;
  nro_pedidos : String[] = [];
  riders: any;

  constructor(private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private orderDataService: OrderDataService,
    private riderService: RiderService,
    private shippingService: ShippingService,
    private router: Router
  ) {

    this.form = this.formBuilder.group(
      {
        fecha: ["", [Validators.required]],
        id_rider: ["", [Validators.required]]
      }
    );
  }

  ngOnInit(): void {
    this.riderService.getRiders().subscribe(response => {
      this.riders = response;
    })

    this.shippingService.selectedOrders$.subscribe(pedidos => {
      this.nro_pedidos = pedidos;
      console.log(pedidos);
         })


    // Obtener la fecha actual en formato YYYY-MM-DD
    const fechaActual = new Date().toISOString().split('T')[0];

    // Asignar la fecha actual al formulario
    this.form.patchValue({ fecha: fechaActual });

  }

  get Fecha() {
    return this.form.get("fecha");
  }
  get Nro_pedido() {
    return this.form.get("nro_pedido");
  }
  get Id_rider() {
    return this.form.get("id_rider");
  }

  sendForm() {  
    if (this.form.valid && this.nro_pedidos.length > 0) {
      const datosEnvio = {
        ...this.form.value,
        nro_pedido: this.nro_pedidos
      };

      console.log(datosEnvio);
      this.shippingService.saveShipping(datosEnvio).subscribe({
        next: (response) => {
          alert(`✅ ${response.message}\n\nNro Pedido guardados: ${response.pedidos_guardados}\nPedidos No guardados: ${response.pedidos_no_encontrados} \n ${response.email}`);
        },
        error: (error) => {
          console.error("Error al guardar:", error);
          alert("Hubo un error al guardar el envío.");
        },
        complete: () => 
          this.router.navigate(["/order/sent"])
      });
    } else {
      this.form.markAllAsTouched();
      if (this.nro_pedidos.length === 0) {
        alert("Debe seleccionar al menos un número de pedido.");
      }
    }
  }
}

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
        nro_pedido: ["", [Validators.required]],
        id_rider: ["", [Validators.required]]
      }
    );
  }

  ngOnInit(): void {
    this.riderService.getRiders().subscribe(response => {
      this.riders = response;
    })

    // Obtener la fecha actual en formato YYYY-MM-DD
    const fechaActual = new Date().toISOString().split('T')[0];

    // Asignar la fecha actual al formulario
    this.form.patchValue({ fecha: fechaActual });

    // Obtener el ID del pedido desde la URL
    const idParam = this.activateRoute.snapshot.paramMap.get('id');

    if (idParam) {
      this.idPedido = +idParam;
      // Buscar el pedido en el servicio y llenar el formulario
      this.orderDataService.orderFindById(this.idPedido).subscribe(pedido => {
        console.log(pedido)
        this.form.patchValue({
          fecha: new Date().toISOString().split('T')[0], // Fecha actual
          nro_pedido: pedido.nro_pedido, // Número de pedido
          id_rider: "" // Se seleccionará manualmente
        });
      });
    }
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
    if (this.form.valid) {
      console.log(this.form.value);
      this.shippingService.saveShipping(this.form.value).subscribe({
        next: (response) => {
          alert(response);
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
    }
  }
}

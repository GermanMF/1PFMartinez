import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.scss']
})
export class AltasComponent {

  alumnosForm: FormGroup = new FormGroup({});

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15),
  ]);
  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15),
  ]);
  locacionControl = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<AltasComponent>){
    this.alumnosForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      locacion: this.locacionControl
    });
  }

  onSubmit(): void {
    if (this.alumnosForm.valid) {
      console.log("Valido");
    }
    else{
      console.log("Error");
    }
    console.log("Se submiteo");
  }

}

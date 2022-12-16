import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nombre = new FormControl('',Validators.required);
  apellido = new FormControl('',Validators.required);
  email = new FormControl('',Validators.required);
  password = new FormControl('',Validators.required);
  repeatpassword = new FormControl('',Validators.required);

  formularioAlumno= new FormGroup({
    nombre : this.nombre,
    apellido: this.apellido,
    email: this.email,
    password:this.password,
    repeatpassword:this.repeatpassword,
  })

  onSubmit(){
    console.log(this.formularioAlumno.value)
  }
}

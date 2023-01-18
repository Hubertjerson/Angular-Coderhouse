import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/auth/shared/services/student.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  alumnos: Student[];
  alumnoSubcription: Subscription;
  alumnosFormulario: FormGroup
  id!: number
  constructor(
    private alumnoService : StudentService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.alumnoSubcription = this.alumnoService.ObtenerAlumnos().subscribe((alumno) => this.alumnos = alumno)

      this.alumnosFormulario = new FormGroup({
        name: new FormControl,
        LastName:new FormControl,
        email:new FormControl,
        edad:new FormControl,
        sexo:new FormControl,
      })
  }

  guardarAlumno(){
    let idAlumno:number = Math.max.apply(null, this.alumnos.map(o => o.id));

    let student : Student = {
      id: idAlumno+1,
      name: this.alumnosFormulario.value.name,
      LastName:this.alumnosFormulario.value.LastName,
      email:this.alumnosFormulario.value.email,
      edad:this.alumnosFormulario.value.edad,
      sexo:this.alumnosFormulario.value.sexo,
    }
    this.alumnoService.agregarAlumno(student).subscribe(()=>this.router.navigate(['/alumnos/lista']));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se Agrego un nuevo Alumno',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  ngOnDestroy(): void {
    this.alumnoSubcription.unsubscribe();
  }
}

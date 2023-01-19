import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { StudentService } from 'src/app/auth/shared/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  alumno: Student;
  formularioEditable: FormGroup;
  id!: number

  constructor(
    private activatedRouted: ActivatedRoute,
    private alumnoService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRouted.paramMap.subscribe((data) => {
      this.id = parseInt(data.get('id') || '')
      this.formularioEditable = new FormGroup({
        name: new FormControl(data.get('name')),
        LastName: new FormControl(data.get('LastName')),
        edad: new FormControl(data.get('edad')),
        sexo: new FormControl(data.get('sexo'))
      })
    })
  }

  editarAlumno() {
    let alumnos: Student = {
      id: this.id,
      name: this.formularioEditable.value.name,
      LastName: this.formularioEditable.value.LastName,
      email: this.formularioEditable.value.email,
      edad: this.formularioEditable.value.edad,
      sexo: this.formularioEditable.value.sexo,
    }
    this.alumnoService.editarAlumno(alumnos).subscribe(()=>this.router.navigate(['/alumnos/lista']));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se editor correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Student } from 'src/app/auth/core/models/Student.model';
import { StudentService } from 'src/app/auth/core/services/student.service';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css']
})
export class FormAlumnosComponent implements OnInit {

  studentForm:FormGroup;

  constructor(
    private studentsService:StudentService,
    private router:Router,
    private _snackBar:MatSnackBar
  ){}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name:new FormControl('',
      Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      lastName:new FormControl('',
      Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      email:new FormControl('@correo.com',
      Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ])),
      curso: new FormControl('',Validators.required)
    })
  }
  
  addStudents(){
    const courses : Student ={
      id:Math.round(Math.random()*1000),
      name:this.studentForm.value.name,
      lastName:this.studentForm.value.lastName,
      email:this.studentForm.value.email,
      curso:this.studentForm.value.curso

    }
    this.studentsService.addStudent(courses);
    this.router.navigate(['login/dashboard/alumnos'])

    this._snackBar.open('El Alumno se agregado con exito','',{
      duration:3500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}

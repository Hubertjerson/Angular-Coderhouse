import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { StudentService } from 'src/app/auth/shared/services/student.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


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
      LastName:new FormControl('',
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
      edad: new FormControl('',Validators.required,),
      sexo:new FormControl('',Validators.required,),
    })
  }

  addStudents(){
    const student : Student ={
      id:Math.round(Math.random()*1000),
      name:this.studentForm.value.name,
      LastName:this.studentForm.value.LastName,
      email:this.studentForm.value.email,
      edad:this.studentForm.value.edad,
      sexo:this.studentForm.value.sexo

    };
    this.studentsService.addStudent(student).subscribe(()=>this.router.navigate(['/alumnos/lista']));

    this._snackBar.open('El Alumno se agregado con exito','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}

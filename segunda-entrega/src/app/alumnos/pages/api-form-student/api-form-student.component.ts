import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentApiService } from '../../../core/services/student-api.service';
import { StudentApi } from '../../../core/models/studenApi';

@Component({
  selector: 'app-api-form-student',
  templateUrl: './api-form-student.component.html',
  styleUrls: ['./api-form-student.component.css']
})
export class ApiFormStudentComponent implements OnInit{

  studentForm:FormGroup;

  constructor(
    private studentApiService:StudentApiService,
    private router:Router
  ){}

  ngOnInit(): void {
      this.studentForm = new FormGroup({
        name:new FormControl(),
        LastName:new FormControl(),
        email:new FormControl(),
        edad: new FormControl(),
        sexo:new FormControl(),
      })
  }

  addStudents(){
    const student:StudentApi = {
      id:Math.round(Math.random()*100),
      name:this.studentForm.value.name,
      LastName:this.studentForm.value.LastName,
      email:this.studentForm.value.email,
      edad:this.studentForm.value.edad,
      sexo:this.studentForm.value.sexo
    }
    this.studentApiService.addApiStudent(student);
    this.router.navigate(['alumnos/api'])
  }
}

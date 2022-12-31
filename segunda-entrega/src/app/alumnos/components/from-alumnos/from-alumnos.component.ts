import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/core/models/studen.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-from-alumnos',
  templateUrl: './from-alumnos.component.html',
  styleUrls: ['./from-alumnos.component.css']
})
export class FromAlumnosComponent implements OnInit {

  studentForm:FormGroup;

  constructor(
    private studentsService : StudentService,
    private router:Router
  ){}



  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name:new FormControl(),
      lastName:new FormControl(),
      email:new FormControl(),
      curso: new FormControl()
    });
  }

  addStudents(){
    const courses : Student ={
      id:Math.round(Math.random()*10),
      name:this.studentForm.value.name,
      lastName:this.studentForm.value.lastName,
      email:this.studentForm.value.email,
      curso:this.studentForm.value.curso

    }
    this.studentsService.addStudent(courses);
    this.router.navigate(['alumnos'])
  }
}

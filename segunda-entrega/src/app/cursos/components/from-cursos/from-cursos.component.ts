import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/models/cursos.model';
import { CursoService } from 'src/app/core/services/curso.service';

@Component({
  selector: 'app-from-cursos',
  templateUrl: './from-cursos.component.html',
  styleUrls: ['./from-cursos.component.css']
})
export class FromCursosComponent implements OnInit{

  coruseForm:FormGroup

  constructor(
    private courseService:CursoService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.coruseForm = new FormGroup({
      name:new FormControl(),
      teacher:new FormControl(),
      code:new FormControl(),
      initiation:new FormControl(),
      finish:new FormControl(),
    })
  }

  addCourse(){
    const curso:Course ={
      id:Math.round(Math.random()*100),
      name:this.coruseForm.value.name,
      teacher:this.coruseForm.value.teacher,
      code:this.coruseForm.value.code,
      initiation:this.coruseForm.value.initiation,
      finish:this.coruseForm.value.finish,
    }
    this.courseService.addCourse(curso);
    this.router.navigate(['cursos'])
  }

}

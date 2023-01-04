import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/auth/shared/models/Curso.model';
import { CursoService } from 'src/app/auth/shared/services/curso.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  coruseForm:FormGroup

  constructor(
    private courseService: CursoService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.coruseForm = new FormGroup({
      name:new FormControl('',
      Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      teacher:new FormControl('',Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      code:new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ])),
      initiation:new FormControl('',Validators.required),
      finish:new FormControl('',Validators.required),
      img:new FormControl(),
    })
  }

  addCourse(){
    const curso:Curso ={
      id:Math.round(Math.random()*100),
      name:this.coruseForm.value.name,
      teacher:this.coruseForm.value.teacher,
      code:this.coruseForm.value.code,
      initiation:this.coruseForm.value.initiation,
      finish:this.coruseForm.value.finish,
      img:this.coruseForm.value.img
    }
    this.courseService.addCourse(curso)
    this.router.navigate(['cursos/listado'])
  }

}

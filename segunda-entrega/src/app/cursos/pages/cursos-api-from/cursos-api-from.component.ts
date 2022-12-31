import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CursosApi } from 'src/app/core/models/cursosApi.model';
import { CursoApiService } from '../../../core/services/curso-api.service';

@Component({
  selector: 'app-cursos-api-from',
  templateUrl: './cursos-api-from.component.html',
  styleUrls: ['./cursos-api-from.component.css']
})
export class CursosApiFromComponent implements OnInit {

  coruseForm:FormGroup

  constructor(
    private courseApiService: CursoApiService,
    private router:Router
  ){}

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
    const curso:CursosApi ={
      id:Math.round(Math.random()*100),
      name:this.coruseForm.value.name,
      teacher:this.coruseForm.value.teacher,
      code:this.coruseForm.value.code,
      initiation:this.coruseForm.value.initiation,
      finish:this.coruseForm.value.finish,
    }
    this.courseApiService.addApiCourse(curso);
    this.router.navigate(['cursos/api'])
  }
}

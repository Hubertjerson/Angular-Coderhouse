import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/app/auth/shared/models/Curso.model';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { CursosService } from 'src/app/auth/shared/services/cursos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  cursos: Curso[];
  cursoSubcription: Subscription;
  cursosFormulario: FormGroup;

  constructor(
    private cursoService: CursosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursoSubcription = this.cursoService.ObtenerCursos().subscribe((curso) => this.cursos = curso)

    this.cursosFormulario = new FormGroup({
      id: new FormControl,
      name: new FormControl,
      teacher: new FormControl,
      code: new FormControl,
      initiation: new FormControl,
      img: new FormControl,
    })
  }

  guardarCurso() {
    let idcurso:number = Math.max.apply(null, this.cursos.map(o => o.id));

    let course : Curso = {
      id: idcurso+1,
      name:this.cursosFormulario.value.name,
      teacher:this.cursosFormulario.value.teacher,
      code:this.cursosFormulario.value.code,
      initiation:this.cursosFormulario.value.initiation,
      img:this.cursosFormulario.value.img
    }
    this.cursoService.agregarAlumno(course).subscribe(()=>this.router.navigate(['/cursos/listado']))
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se Agrego un nuevo Alumno',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  ngOnDestroy(): void {
    this.cursoSubcription.unsubscribe();
  }
}

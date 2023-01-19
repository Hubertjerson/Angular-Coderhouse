import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curso } from 'src/app/auth/shared/models/Curso.model';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      teacher: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      initiation: new FormControl,
      img: new FormControl('', [Validators.required]),
    })
  }

  guardarCurso() {

    let course : Curso = {
      id: Math.round(Math.random()*1000),
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

  /*FUNCION PARA EL TESTING*/
  createProduct() {
    if (this.cursosFormulario.valid) {
      this.cursoService.agregarAlumno(this.cursosFormulario.value);
    } else {
      alert('El formulario es invalido');
    }
  }
}

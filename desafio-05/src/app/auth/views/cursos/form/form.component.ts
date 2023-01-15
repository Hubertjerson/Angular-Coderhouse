import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/auth/shared/models/Curso.model';
import { CursoService } from 'src/app/auth/shared/services/curso.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formCursos: FormGroup;
  cursoToEdit: any; //cursoto Edit
  error = false
  index: any;
  @Output() VerForm = new EventEmitter<any>();
  constructor(
    private cursosService: CursoService,
    private fbuild: FormBuilder,
  ) { }

  addCurso(curso: Curso) {
    this.cursosService.createCurso(curso).subscribe(
      val => {
        console.log(val);
        this.VerForm.emit(true);
      }
    )
  }

  updateCurso(curso: Curso) {
    this.cursosService.updateCurso(curso).subscribe(
      val => {
        console.log(val);
        this.VerForm.emit(true);
      }
    )
  }

  ngOnInit(): void {
    this.formCursos = this.fbuild.group({
      name: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      horario: ['', [Validators.required,]],
      profesor: ['', [Validators.required,]],

    });
    //el alumno a editar no cambia asi que lo podemos traer rapidamente
    this.cursosService.getCursoToEdit().subscribe(
      val => this.cursoToEdit = val
    )

    if (this.cursoToEdit) {
      this.formCursos.get('name')?.patchValue(this.cursoToEdit.name);
      this.formCursos.get('codigo')?.patchValue(this.cursoToEdit.codigo);
      this.formCursos.get('horario')?.patchValue(this.cursoToEdit.horario);
      this.formCursos.get('profesor')?.patchValue(this.cursoToEdit.profesor);
    }
  }

  onSubmit() {
    if ((this.formCursos.status != 'INVALID')) {
      if (!this.cursoToEdit) {
        this.addCurso(this.formCursos.value);
      } else {
        this.formCursos.value['id'] = this.cursoToEdit.id;
        this.updateCurso(this.formCursos.value);
        this.cursosService.cursoToEdit = null;
      }
    }
    else {
      console.log('error')
    }
  }
}

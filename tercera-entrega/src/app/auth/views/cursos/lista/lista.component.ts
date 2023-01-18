import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/auth/shared/models/Curso.model';
import { CursosService } from 'src/app/auth/shared/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  curso: Curso;
  cursos: Curso[];
  cursos$: Observable<Curso[]>
  cursoSubscription: Subscription

  dataSource: MatTableDataSource<Curso>
  displayedColumns: string[] = ['id', 'name', 'teacher', 'code', 'initiation', 'eliminar'];

  constructor(
    private cursoService: CursosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.ObtenerCursos();
    this.cursoSubscription = this.cursos$.subscribe((cursos: Curso[]) => {
      this.cursos = cursos
    })
    this.dataSource = new MatTableDataSource<Curso>(this.cursos);
  }

  ngOnDestroy(): void {
    this.cursoSubscription.unsubscribe()
  }

  applyFilter(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.cursos$ = this.cursoService.ObtenerCursos().pipe(
      map(c => c.filter(
        curso => curso.name.toLocaleLowerCase().includes(valorObtenido.toLocaleLowerCase())
      ))
    );
  }

  eliminarCurso(elemento: Curso) {
    this.cursoService.eliminarAlumno(elemento).subscribe(() => {
      this.cursos$ = this.cursoService.ObtenerCursos();
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se elimno correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

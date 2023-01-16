import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { Curso } from 'src/app/auth/shared/models/Curso.model';
import { CursoService } from 'src/app/auth/shared/services/curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  constructor(private cursosService: CursoService) { }
  //variables para leer los servicios
  cursos: Curso[];
  //ocultar la pestaña
  @Output() OcultarTabla = new EventEmitter<any>();
  //variables para tabla
  displayedColumns: string[] = ['id', 'name', 'codigo', 'horario', 'profesor', 'editar', 'eliminar'];
  @ViewChild(MatTable) table: MatTable<Curso>;
  dataSource = new MatTableDataSource<Curso>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCurseList$ = this.cursosService.getCursosList().pipe(
    tap((val) => {
      this.cursos = val;
      this.dataSource.data = this.cursos;
    })
  )

  getCursos() {
    this.getCurseList$.subscribe();
  }

  ngOnInit(): void {
    this.getCursos();
  }

  onUpdate(elemento: Curso) {

    //ahora este lo enviamos a nuestro formulario
    this.cursosService.cursoToEdit = elemento;
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }

  onDelete(elemento: Curso) {
    this.cursosService.deleteCurso(elemento).subscribe(() => {
      this.getCursos();
    });
  }

  onAdd() {
    this.OcultarTabla.emit(true);
  }
}

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  @Output() OcultarTabla= new EventEmitter<any>();
  //variables para tabla
  displayedColumns: string[] = ['id', 'name', 'codigo', 'horario', 'profesor', 'editar','eliminar'];
  @ViewChild(MatTable) table: MatTable<Curso>;
  dataSource = new MatTableDataSource<Curso>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    getCursos(){
      this.cursosService.getCursosList().subscribe(
        (val)=>{
          this.cursos=val;
          this.dataSource.data=this.cursos;
        }
      )
    }
    deleteCurso(elemento:Curso){
      this.cursosService.deleteCurso(elemento).subscribe(
        val=>{
          console.log(val);
        }
      )
    }
    ngOnInit(): void {
      this.getCursos();
    }

    onUpdate(elemento:Curso){

      //ahora este lo enviamos a nuestro formulario
      this.cursosService.cursoToEdit=elemento;
      this.OcultarTabla.emit(true);
      this.table.renderRows();
    }

    onDelete(elemento:Curso){
      let indexlocal=this.dataSource.data.findIndex((al:any) => al.id===elemento.id);
      this.dataSource.data.splice(indexlocal,1);
      this.deleteCurso(elemento);
    }
  
    onAdd() {
      this.OcultarTabla.emit(true);
    }
}

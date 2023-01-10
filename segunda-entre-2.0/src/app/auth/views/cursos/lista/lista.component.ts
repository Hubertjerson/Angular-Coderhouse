import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/auth/shared/models/Curso.model';
import { CursoService } from 'src/app/auth/shared/services/curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  courses: Curso[];
  courses$: Observable<Curso[]>
  courseSubscription: Subscription

  dataSource = new MatTableDataSource<Curso>
  displayedColumns: string[] = ['id', 'name', 'teacher', 'code', 'initiation', 'finish', 'eliminar'];

  constructor(
    private courseService: CursoService,
    private router : Router
  ) { }

  @ViewChild(MatTable) table: MatTable<Curso>;
  @Output() OcultarTabla = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.courses$ = this.courseService.getListCourse();
    this.courseSubscription = this.courses$.subscribe(cursos => {
      this.courses = cursos;
      this.dataSource.data = this.courses;
    })
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(elemento:Curso){
    let indexOfAlumnos=this.dataSource.data.findIndex((al:any) => al.id===elemento.id);
    this.dataSource.data.splice(indexOfAlumnos,1);
  }

}

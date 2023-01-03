import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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

  constructor(
    private courseService: CursoService,
  ) { }

  @ViewChild(MatTable) table: MatTable<Curso>;

  ngOnInit(): void {
    this.courses$ = this.courseService.getListCourse();
    this.courseSubscription = this.courses$.subscribe(cursos => {
      this.courses = cursos;
      this.dataSource.data = this.courses;
    })
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    console.log(this.paginator)
    this.dataSource.paginator = this.paginator;
  }

  @Output() OcultarTabla = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'name', 'teacher', 'code', 'initiation', 'finish',];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}

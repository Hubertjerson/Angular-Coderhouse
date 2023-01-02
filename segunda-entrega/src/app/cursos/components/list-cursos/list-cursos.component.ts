import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/cursos.model';
import { CursoService } from '../../../core/services/curso.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent implements OnInit,OnDestroy {

  courses : Course[];
  courses$:Observable<Course[]>
  courseSubscription:Subscription

  dataSource = new MatTableDataSource<Course>
  displayedColumns: string[] = ['id', 'name', 'teacher', 'code', 'initiation','finish',];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

constructor(
  private courseService:CursoService,
){}

  ngOnInit(): void {
      this.courses$ = this.courseService.getListCourse();
      this.courseSubscription=this.courses$.subscribe(cursos => {
        this.courses = cursos;
        this.dataSource.data = this.courses;
        this.dataSource.paginator = this.paginator
      })
  }
  ngOnDestroy(): void {
      this.courseSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

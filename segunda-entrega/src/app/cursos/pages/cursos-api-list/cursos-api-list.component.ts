import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';

import { CursosApi } from 'src/app/core/models/cursosApi.model';
import { CursoApiService } from '../../../core/services/curso-api.service';

@Component({
  selector: 'app-cursos-api-list',
  templateUrl: './cursos-api-list.component.html',
  styleUrls: ['./cursos-api-list.component.css']
})
export class CursosApiListComponent implements OnInit,OnDestroy{

  coursesApi : CursosApi[];
  coursesApi$:Observable<CursosApi[]>
  courseApiSubscription:Subscription


  dataSource = new MatTableDataSource<CursosApi>
  displayedColumns: string[] = ['id', 'name', 'teacher', 'code', 'initiation','finish',];

  constructor(
    private courseApiService: CursoApiService
  ){}

  ngOnInit(): void {
      this.coursesApi$ = this.courseApiService.GetApiCourseList();
      this.courseApiSubscription = this.coursesApi$.subscribe( cursos => {
        this.coursesApi = cursos;
        this.dataSource.data=this.coursesApi;
      });
  }

  ngOnDestroy(): void {
      this.courseApiSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

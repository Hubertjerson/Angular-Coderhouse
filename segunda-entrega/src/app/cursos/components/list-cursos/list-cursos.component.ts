import { Component, OnDestroy, OnInit } from '@angular/core';
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

constructor(
  private courseService:CursoService,
){}

  ngOnInit(): void {
      this.courses$ = this.courseService.getListCourse();
      this.courseSubscription=this.courses$.subscribe(cursos => this.courses = cursos)
  }
  ngOnDestroy(): void {
      this.courseSubscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Student } from 'src/app/core/models/studen.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit,OnDestroy{

  students:Student[];
  students$:Observable<Student[]>
  studentSusbscription:Subscription

  dataSource = new MatTableDataSource<Student>
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'curso',];
  constructor(
    private studentService:StudentService
  ){}

  ngOnInit(): void {
      this.students$=this.studentService.StudentsDate();
      this.studentSusbscription=this.students$.subscribe(student => {
        this.students = student;
        this.dataSource.data=this.students;
      });
  }

  ngOnDestroy(): void {
      this.studentSusbscription.unsubscribe();
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

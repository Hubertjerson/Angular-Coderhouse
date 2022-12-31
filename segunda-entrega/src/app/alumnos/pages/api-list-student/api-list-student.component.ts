import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentApiService } from '../../../core/services/student-api.service';
import { StudentApi } from '../../../core/models/studenApi';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-api-list-student',
  templateUrl: './api-list-student.component.html',
  styleUrls: ['./api-list-student.component.css']
})
export class ApiListStudentComponent implements OnInit, OnDestroy{

  studentsApi: StudentApi[];
  studentsApi$:Observable<StudentApi[]>
  studentsApiSubscription:Subscription;

  dataSource = new MatTableDataSource<StudentApi>
  displayedColumns: string[] = ['id', 'name', 'LastName', 'edad', 'sexo',];

  constructor(
    private studentApiService: StudentApiService
  ){}

  ngOnInit(): void {
      this.studentsApi$ = this.studentApiService.GetApiStudentList();
      console.log(this.studentsApi$);
      this.studentsApiSubscription = this.studentsApi$.subscribe(student =>{
        this.dataSource.data=student;
      });
  }

  ngOnDestroy(): void {
      this.studentsApiSubscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

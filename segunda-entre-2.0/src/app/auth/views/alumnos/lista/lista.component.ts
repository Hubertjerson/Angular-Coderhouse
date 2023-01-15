import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { StudentService } from 'src/app/auth/shared/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy{

  studentsApi: Student[];
  studentsApi$:Observable<Student[]>
  studentsApiSubscription:Subscription;

  dataSource = new MatTableDataSource<Student>
  displayedColumns: string[] = ['id', 'name', 'LastName', 'edad', 'sexo','eliminar'];


  constructor(
    private studentSerice:StudentService,
    private router :Router
  ){}

  @ViewChild(MatTable) table: MatTable<Student>;
  @Output() OcultarTabla = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.studentsApi$ = this.studentSerice.getStudenList();
    this.studentsApiSubscription = this.studentsApi$.subscribe(student =>{
      this.studentsApi=student
      this.dataSource.data=this.studentsApi;
    })
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    console.log(this.paginator)
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.studentsApiSubscription.unsubscribe()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteStudent(id:number){
    this.studentSerice.deleteStudent(id);
    this.dataSource = new MatTableDataSource<Student>(this.studentsApi);
    this.studentsApi = this.studentsApi.filter(el => el.id !== id);
  }
}



import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { StudentService } from 'src/app/auth/shared/services/student.service';

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


  constructor(
    private studentSerice:StudentService
  ){}

  @ViewChild(MatTable) table: MatTable<Student>;

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

  @Output() OcultarTabla = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'name', 'LastName', 'edad', 'sexo',];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnDestroy(): void {
    this.studentsApiSubscription.unsubscribe()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



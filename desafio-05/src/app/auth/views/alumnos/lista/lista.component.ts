import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { StudentService } from 'src/app/auth/shared/services/student.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, AfterViewInit{
  student: Student[];
  dataSource = new MatTableDataSource<Student>
  displayedColumns: string[] = ['id', 'name', 'LastName', 'edad', 'sexo','editar','eliminar'];
  @ViewChild(MatTable) table: MatTable<Student>;
  @Output() OcultarTabla = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private studentService:StudentService
    ){}

  getStudentList$ = this.studentService.getStudenList().pipe(
    tap((val)=> {
      this.student = val;
      this.dataSource.data = this.student;
    })
  )

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

  getStudent(){
    this.getStudentList$.subscribe();
  }


  ngOnInit(): void {
      this.getStudent();
  }

  onUpdate(elemento:Student){
    this.studentService.studentEdit = elemento;
    this.OcultarTabla.emit(true);
    this.table.renderRows();
  }

  onDelete(elemento:Student){
    this.studentService.deleteStudent(elemento).subscribe(()=>{
      this.getStudent();
    });
  }
  OnAdd(){
    this.OcultarTabla.emit(true);
  }
}

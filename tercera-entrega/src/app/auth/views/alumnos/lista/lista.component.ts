import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { StudentService } from 'src/app/auth/shared/services/student.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  alumno: Student;
  alumnos: Student[];
  alumnosSubcription!: Subscription
  alumnos$!: Observable<Student[]>

  dataSource: MatTableDataSource<Student>
  displayedColumns: string[] = ['id', 'name', 'LastName', 'edad', 'sexo','eliminar'];

  constructor(
    private alumnoService: StudentService,
    private router: Router,
  ){
    
  }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.ObtenerAlumnos();
    this.alumnosSubcription = this.alumnos$.subscribe((alumnos: Student[]) => this.alumnos = alumnos)

    this.dataSource = new MatTableDataSource<Student>(this.alumnos);
  }

  eliminarAlumno(elemento:Student){
    this.alumnoService.eliminarAlumno(elemento).subscribe(()=>{
      this.alumnos$ = this.alumnoService.ObtenerAlumnos();
    });
  }
}
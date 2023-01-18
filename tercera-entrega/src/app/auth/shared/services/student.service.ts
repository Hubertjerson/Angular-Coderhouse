import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL = environments.apiURL;
  constructor(
    private http: HttpClient
  ) { }

  ObtenerAlumnos(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiURL}/Alumnos`)
  }

  agregarAlumno(alumno:Student):Observable<Student>{
    return this.http.post<Student>(`${this.apiURL}/Alumnos`, alumno);
  }
  eliminarAlumno(alumno:Student):Observable<Student>{
    return this.http.delete<Student>(`${this.apiURL}/Alumnos/${alumno.id}`);
  }
  editarAlumno(alumno : Student){
    this.http.put<Student>(`${this.apiURL}/Alumnos/${alumno.id}`, alumno)
  }
}

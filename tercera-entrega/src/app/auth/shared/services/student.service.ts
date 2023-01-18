import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fake, Student } from '../models/Student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL = environments.apiURL;
  URL = 'https://63b1c9850d51f5b2971ee044.mockapi.io'
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

  getAlumnos(){
    return this.http.get<fake[]>(`${this.URL}/Alumnos`)
  }

}

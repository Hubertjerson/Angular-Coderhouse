import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Curso } from '../models/Curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiURL = environments.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  ObtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.apiURL}/Cursos`)
  }
  agregarAlumno(cursos:Curso):Observable<Curso>{
    return this.http.post<Curso>(`${this.apiURL}/Cursos`, cursos);
  }
  eliminarAlumno(cursos:Curso):Observable<Curso>{
    return this.http.delete<Curso>(`${this.apiURL}/Cursos/${cursos.id}`);
  }
  editarAlumno(cursos : Curso){
    this.http.put<Curso>(`${this.apiURL}/Cursos/${cursos.id}`, cursos)
  }
}

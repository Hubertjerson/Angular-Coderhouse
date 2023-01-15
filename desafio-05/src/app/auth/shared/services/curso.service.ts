import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from '../models/Curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url_root = 'https://63ab3e25fdc006ba605a20c3.mockapi.io/Cursos/'
  cursoslist=<any>[];
  cursoToEdit:any;
  constructor(private http: HttpClient) { }
  getCursosList():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url_root)
  }
  getCursoToEdit():Observable<any> {
    return of(this.cursoToEdit);
  }
  createCurso(curso: Curso):Observable<Curso> {
    return this.http.post<Curso>(this.url_root, curso)
  }
  updateCurso(curso: Curso):Observable<Curso> {
    return this.http.put<Curso>(this.url_root+curso.id, curso)
  }
  deleteCurso(curso: Curso):Observable<Curso> {
    return this.http.delete<Curso>(this.url_root+curso.id)
  }
}

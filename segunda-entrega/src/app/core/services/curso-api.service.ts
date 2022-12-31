import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosApi } from '../models/cursosApi.model';

@Injectable({
  providedIn: 'root'
})
export class CursoApiService {

  constructor(
    private http: HttpClient
  ) { }

  root_url = 'https://63ab3e25fdc006ba605a20c3.mockapi.io/Cursos'

  GetApiCourseList(): Observable<CursosApi[]> {
    return this.http.get<CursosApi[]>(this.root_url)/*(`${environment.apiUrl}/Cursos`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'Utf-8'
      })
    })*/
  }

  addApiCourse(course: CursosApi){
    this.http.post<CursosApi>(this.root_url,course)
  }


}

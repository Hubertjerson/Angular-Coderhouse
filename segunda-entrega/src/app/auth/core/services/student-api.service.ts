import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentApi } from '../models/StudentApi.model';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(
    private http: HttpClient
  ) { }

  root_url = 'https://63ab3e25fdc006ba605a20c3.mockapi.io/Alumnos'

  GetApiStudentList(): Observable<StudentApi[]> {
    return this.http.get<StudentApi[]>(this.root_url)/*(`${environment.apiUrl}/Alumnos`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'Utf-8'
      })
    })*/
  }

  addApiStudent(student:StudentApi ){
    this.http.post<StudentApi>(this.root_url,student)
  }
}

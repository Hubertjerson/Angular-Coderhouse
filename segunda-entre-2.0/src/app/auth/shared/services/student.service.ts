import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  root_url = 'https://63ab3e25fdc006ba605a20c3.mockapi.io/Alumnos/'

  getStudenList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.root_url)/*(`${environment.apiUrl}/Alumnos`,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'Utf-8'
      })
    })*/
  }

  addStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.root_url, student);
  }
  
  deleteStudent(id:number):Observable<Student>{
    return this.http.delete<Student>(this.root_url+id)
  }
}

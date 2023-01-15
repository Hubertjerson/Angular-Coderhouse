import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  root_url = 'https://63ab3e25fdc006ba605a20c3.mockapi.io/Alumnos/'
  studentList=<any>[];
  studentEdit:any;
  constructor(
    private http: HttpClient
  ) { }


  getStudenList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.root_url)
  }

  getStudentEdit():Observable<any>{
    return of(this.studentEdit)
  }

  addStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.root_url, student);
  }

  updateStudent(student:Student):Observable<Student>{
    return this.http.put<Student>(this.root_url+student.id, student)
  }

  deleteStudent(student:Student):Observable<Student>{
    return this.http.delete<Student>(this.root_url+student.id)
  }
}

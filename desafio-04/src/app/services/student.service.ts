import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


export interface Student {
  name : string;
  lastName : string;
  email : string;
  age:number;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private student : Student[];
  private student$: Subject<Student[]>;

  constructor() {
    this.student = [];
    this.student$ = new Subject();
   }

   addStudent(sStudent : Student) {
    this.student.push(sStudent);
    this.student$.next(this.student);
   }

   getListStudent$(): Observable<Student[]> {
    return this.student$.asObservable();
   }

   filtersSource = new BehaviorSubject(null);
   filters$= this.filtersSource.asObservable();
}

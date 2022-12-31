import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


//MODELS
import { Student } from '../models/studen.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students:Student[]=[
    {id:1,name: 'Amanda',lastName:'Romaguera',email:'amanda@gmail.com',curso:'ReactJS'},
    {id:2,name:'Kian',lastName:'Kiehn',email:'Everardo_Grady@yahoo.com',curso:'AngularJS'},
    {id:3,name:'Nasir',lastName:'Deckow',email:'Jarrett50@yahoo.com',curso:'Java'},
    {id:4,name:'Katelin',lastName:'Deckow',email:'Peyton66@yahoo.com',curso:'C#'},
    {id:5,name:'Alessia',lastName:'Boyle',email:'Irving73@yahoo.com',curso:'Desarrollo Web'},
    {id:6,name:'Maritza',lastName:'Cremin',email:'Lesley_Bradtke59@gmail.com',curso:'JavaScript'},
  ];
  private students$: BehaviorSubject<Student[]>;

  constructor()
  {
    this.students$ = new BehaviorSubject(this.students)
  }

  StudentsDate(): Observable<Student[]>{
    return this.students$.asObservable();
  }

  addStudent(sStudent:Student){
    this.students.push(sStudent);
    this.students$.next(this.students);
  }

}

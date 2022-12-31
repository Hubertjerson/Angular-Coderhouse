import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../models/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private courses : Course[]=[
    {id:1,name:'ReactJS',teacher:'Rolando',code:80900,inscription:true,initiation:new Date(2022,12,27),finish: new Date(2023,2,1)},
    {id:2,name:'AngularJS',teacher:'Geovanni',code:80900,inscription:false,initiation:new Date(2022,11,20),finish: new Date(2023,1,14)},
    {id:3,name:'Java',teacher:'Josue',code:80900,inscription:true,initiation:new Date(2023,2,14),finish: new Date(2023,4,1)},
    {id:4,name:'C#',teacher:'Aaron',code:80900,inscription:false,initiation:new Date(2022,9,17),finish: new Date(2022,11,27)},
    {id:5,name:'Desarrollo Web',teacher:'Priscila',code:80900,inscription:true,initiation:new Date(2023,1,10),finish: new Date(2023,2,30)},
    {id:6,name:'JavaScript',teacher:'Conrado',code:80900,inscription:false,initiation:new Date(2022,11,20),finish: new Date(2023,1,20)},
  ];
  private course$: BehaviorSubject<Course[]>;


  constructor() {
    this.course$ = new BehaviorSubject(this.courses)
  }


  getListCourse():Observable<Course[]>{
    return this.course$.asObservable();
  }

  addCourse(course:Course){
    this.courses.push(course);
    this.course$.next(this.courses);
  }

}

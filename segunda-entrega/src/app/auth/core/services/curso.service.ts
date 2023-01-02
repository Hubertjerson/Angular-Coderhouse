import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models/Curso.mode';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private courses : Curso[]=[
    {id:1,name:'ReactJS',teacher:'Rolando',code:80900,initiation:new Date(2022,12,27),finish: new Date(2023,2,1),img:'https://www.linkpicture.com/q/course-01.jpg'},
    {id:2,name:'AngularJS',teacher:'Geovanni',code:80900,initiation:new Date(2022,11,20),finish: new Date(2023,1,14),img:'https://www.linkpicture.com/q/course-02.jpg'},
    {id:3,name:'Java',teacher:'Josue',code:80900,initiation:new Date(2023,2,14),finish: new Date(2023,4,1),img:'https://www.linkpicture.com/q/course-03.jpg'},
    {id:4,name:'C#',teacher:'Aaron',code:80900,initiation:new Date(2022,9,17),finish: new Date(2022,11,27),img:'https://www.linkpicture.com/q/course-04.jpg'},
    {id:5,name:'Desarrollo Web',teacher:'Priscila',code:80900,initiation:new Date(2023,1,10),finish: new Date(2023,2,30),img:'https://www.linkpicture.com/q/course-01.jpg'},
    {id:6,name:'JavaScript',teacher:'Conrado',code:80900,initiation:new Date(2022,11,20),finish: new Date(2023,1,20),img:'https://www.linkpicture.com/q/course-02.jpg'},
    {id:7,name:'ReactJS',teacher:'Rolando',code:80900,initiation:new Date(2022,12,27),finish: new Date(2023,2,1),img:'https://www.linkpicture.com/q/course-01.jpg'},
    {id:8,name:'AngularJS',teacher:'Geovanni',code:80900,initiation:new Date(2022,11,20),finish: new Date(2023,1,14),img:'https://www.linkpicture.com/q/course-02.jpg'},
    {id:9,name:'Java',teacher:'Josue',code:80900,initiation:new Date(2023,2,14),finish: new Date(2023,4,1),img:'https://www.linkpicture.com/q/course-03.jpg'},
    {id:10,name:'C#',teacher:'Aaron',code:80900,initiation:new Date(2022,9,17),finish: new Date(2022,11,27),img:'https://www.linkpicture.com/q/course-04.jpg'},
    {id:11,name:'Desarrollo Web',teacher:'Priscila',code:80900,initiation:new Date(2023,1,10),finish: new Date(2023,2,30),img:'https://www.linkpicture.com/q/course-01.jpg'},
    {id:12,name:'JavaScript',teacher:'Conrado',code:80900,initiation:new Date(2022,11,20),finish: new Date(2023,1,20),img:'https://www.linkpicture.com/q/course-02.jpg'},
  ];
  private course$: BehaviorSubject<Curso[]>;

  constructor() {
    this.course$ = new BehaviorSubject(this.courses)
  }

  getListCourse():Observable<Curso[]>{
    return this.course$.asObservable();
  }

  addCourse(course:Curso){
    this.courses.push(course);
    this.course$.next(this.courses);
  }
}

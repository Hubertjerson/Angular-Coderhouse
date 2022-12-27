import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Curso {
  id: string;
  name: string;
}
const cursos$ :Observable<Curso[]> = of([
  { id: "j8P9sz", name: "Pepperoni" },
  { id: "tMot06", name: "Supreme" },
  { id: "x9sD3g", name: "Sizzler" }
]);

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})



export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;

  constructor() {}

  ngOnInit() {
    this.cursos$ = cursos$;
  }
}


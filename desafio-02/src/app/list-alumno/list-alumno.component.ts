import { Component } from '@angular/core';

@Component({
  selector: 'app-list-alumno',
  templateUrl: './list-alumno.component.html',
  styleUrls: ['./list-alumno.component.css']
})
export class ListAlumnoComponent {


  filterAlumno: string = ''
  alumnos:any[] = [
    {
      'id': 1,
      'name': 'Maria',
      'age': 18,
      'comision': 30800,
      'promedio': 10
    },
    {
      'id': 2,
      'name': 'Jose',
      'age': 20,
      'comision': 30800,
      'promedio': 8
    },
    {
      'id': 3,
      'name': 'Marcos',
      'age': 19,
      'comision': 30100,
      'promedio': 10
    },
    {
      'id': 4,
      'name': 'Julia',
      'age': 20,
      'comision': 30100,
      'promedio': 5
    },
    {
      'id': 5,
      'name': 'Marcela',
      'age': 20,
      'comision': 30100,
      'promedio': 3
    }
  ]
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  mostrarform: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  onFormSend(e:any){
    this.mostrarform=!e;
  }
  onTableSend(e:any){
    this.mostrarform=e;
  }
}

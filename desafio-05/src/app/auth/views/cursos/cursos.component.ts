import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
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

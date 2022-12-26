import { Component } from '@angular/core';
import { Student, StudentService } from '../../services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

  arrStudent: Student[];

  constructor(
    private studentsService : StudentService
  ){}

  ngOnInit(){
    this.studentsService.getListStudent$().subscribe(student=>{
      this.arrStudent=student;
    })
  }
}

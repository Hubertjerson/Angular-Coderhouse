import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.model';
import { StudentDialogFromComponent } from 'src/app/shared/components/student-dialog-from/student-dialog-from.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  student: Student[] = [
    {id: 1, name: 'Lucas', lastName: 'Garcia', sexo: 'masculino',note:9},
    {id: 2, name: 'Lorenzo', lastName: 'Vasquez', sexo: 'masculino',note:8},
    {id: 3, name: 'Marco', lastName: 'Lopez', sexo: 'masculino',note:5},
    {id: 4, name: 'Marcela', lastName: 'Walker', sexo: 'femenino',note:10},
    {id: 5, name: 'Irina', lastName: 'Gomez', sexo: 'femenino',note:3},
  ];

  displayedColumns: string[] = ['id', 'name', 'lastName', 'sexo', 'note',];
  dataSource = new MatTableDataSource(this.student)

  constructor(private readonly dialogService:MatDialog){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addStudent(){
    this.dialogService.open(StudentDialogFromComponent)
  }
}

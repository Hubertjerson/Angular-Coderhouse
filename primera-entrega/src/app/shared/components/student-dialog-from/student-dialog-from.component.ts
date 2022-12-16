import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-dialog-from',
  templateUrl: './student-dialog-from.component.html',
  styles: [
  ]
})
export class StudentDialogFromComponent {
  sexo: any[] = ['Masculino','Femenino']

  nameControl = new FormControl('', [Validators.required])
  lastNameControl = new FormControl('', [Validators.required])
  sexoControl = new FormControl('', [Validators.required])
  noteControl = new FormControl('', [Validators.required, Validators.min(0),Validators.max(10)])

  studentForm = new FormGroup({
    name:this.nameControl,
    lastName:this.lastNameControl,
    sexo:this.sexoControl,
    note:this.noteControl,
  })
  constructor(
    private readonly dialogRef: DialogRef){}
  AddStud(){
    console.log(this.studentForm)
  }

  close() {
    this.dialogRef.close()
  }
}

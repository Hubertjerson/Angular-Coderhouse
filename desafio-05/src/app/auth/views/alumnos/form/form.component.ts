import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/auth/shared/models/Student.model';
import { StudentService } from 'src/app/auth/shared/services/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  studentForm:FormGroup;
  cursoToEdit:any; //cursoto Edit
  error = false
  index: any;
  @Output() VerForm= new EventEmitter<any>();
  constructor(
    private fbuild:FormBuilder,
    private studentServices:StudentService,
    ){}

  addStudent(student:Student){
    this.studentServices.addStudent(student).subscribe(
      val => {
        this.VerForm.emit(true);
      }
    )
  }

  updateStudent(student:Student){
    this.studentServices.updateStudent(student).subscribe(
      val => {
        this.VerForm.emit(true);
      }
    )
  }

  ngOnInit(): void {
      this.studentForm = this.fbuild.group({
        name:['',[Validators.required]],
        LastName:['',[Validators.required]],
        email:['',[Validators.required]],
        edad:['',[Validators.required]],
        sexo:['',[Validators.required]],
      })
      this.studentServices.getStudentEdit().subscribe(
        val => this.cursoToEdit=val
      )

      if(this.cursoToEdit){
        this.studentForm.get('name')?.patchValue(this.cursoToEdit.name);
        this.studentForm.get('LastName')?.patchValue(this.cursoToEdit.LastName);
        this.studentForm.get('email')?.patchValue(this.cursoToEdit.email);
        this.studentForm.get('edad')?.patchValue(this.cursoToEdit.edad);
        this.studentForm.get('sexo')?.patchValue(this.cursoToEdit.sexo);
      }
  }

  onSubmit(){
    if(this.studentForm.status != 'INVALID'){
      if(!this.cursoToEdit){
        this.addStudent(this.studentForm.value);
      }else{
        this.studentForm.value['id'] = this.cursoToEdit.id;
        this.updateStudent(this.studentForm.value);
        this.studentServices.studentEdit = null;
      }
    }
    else{
      console.log('Error')
    }
  }
}

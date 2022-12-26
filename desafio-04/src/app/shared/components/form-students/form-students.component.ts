import { Component,OnDestroy} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.css']
})
export class FormStudentsComponent implements OnDestroy {


  student: FormGroup;

  constructor(
    private  studentsService: StudentService
  ){
    this.student = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      age:new FormControl(),
    })
  }

  ngOnInit(){
    this.student.get('name')?.valueChanges.pipe(debounceTime(1000)).subscribe((res)=>{
      console.log(res);
    })
    this.student.get('lastName')?.valueChanges.pipe(debounceTime(1000)).subscribe((res)=>{
      console.log(res);
    })
    this.student.get('email')?.valueChanges.pipe(debounceTime(1000)).subscribe((res)=>{
      console.log(res);
    })
  }

  filter(){
    this.studentsService.addStudent(this.student.value);
    this.studentsService.filtersSource.next(this.student.value);
  }

  ngOnDestroy():void{

  }

}

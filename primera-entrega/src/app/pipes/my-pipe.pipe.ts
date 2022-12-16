import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'students'
})
export class MyPipePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): string {
    if(value.note <=7){
      return 'Alumno:'+ ' ' + value.name + ' ' + value.lastName + ' ' +'Aprobado';
    }
    return 'Alumno:'+ ' ' + value.name + ' ' + value.lastName + ' ' +'Desaprobado';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: Array<any>, searchAlumno: string): Array<any> {
    return data.filter(getData);
    function getData(value, index) {
      if (value.name.toUpperCase().indexOf(searchAlumno.toUpperCase()) > -1) {
        return data[index];
      }
    };
  };

}

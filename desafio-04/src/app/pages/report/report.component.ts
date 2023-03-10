import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  constructor(private studenstService: StudentService) { }

  value$: any;
  ngOnInit(): void {
    this.value$=this.studenstService.filters$
      .pipe
      (map((res: any) => ({
          age: Number(res?.age) + 5 || null,
          orginalAge: Number(res?.age) || null
    }))
    );
  }
}

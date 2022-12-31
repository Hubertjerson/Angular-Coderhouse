import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListStudentComponent } from './api-list-student.component';

describe('ApiListStudentComponent', () => {
  let component: ApiListStudentComponent;
  let fixture: ComponentFixture<ApiListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiListStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

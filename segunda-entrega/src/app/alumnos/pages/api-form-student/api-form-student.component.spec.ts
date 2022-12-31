import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFormStudentComponent } from './api-form-student.component';

describe('ApiFormStudentComponent', () => {
  let component: ApiFormStudentComponent;
  let fixture: ComponentFixture<ApiFormStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFormStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFormStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

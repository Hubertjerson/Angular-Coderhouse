import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAlumnosComponent } from './from-alumnos.component';

describe('FromAlumnosComponent', () => {
  let component: FromAlumnosComponent;
  let fixture: ComponentFixture<FromAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

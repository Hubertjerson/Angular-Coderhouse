import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCursosComponent } from './from-cursos.component';

describe('FromCursosComponent', () => {
  let component: FromCursosComponent;
  let fixture: ComponentFixture<FromCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

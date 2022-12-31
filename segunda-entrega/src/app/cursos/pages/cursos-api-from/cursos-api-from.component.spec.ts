import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosApiFromComponent } from './cursos-api-from.component';

describe('CursosApiFromComponent', () => {
  let component: CursosApiFromComponent;
  let fixture: ComponentFixture<CursosApiFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosApiFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosApiFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

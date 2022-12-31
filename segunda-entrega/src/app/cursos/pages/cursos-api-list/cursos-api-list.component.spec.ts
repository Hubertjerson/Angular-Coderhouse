import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosApiListComponent } from './cursos-api-list.component';

describe('CursosApiListComponent', () => {
  let component: CursosApiListComponent;
  let fixture: ComponentFixture<CursosApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosApiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

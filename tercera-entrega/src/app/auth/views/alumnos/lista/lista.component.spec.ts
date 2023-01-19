import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ListaComponent } from './lista.component';
import { AlumnosModule } from '../alumnos.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService } from 'src/app/auth/shared/services/student.service';

describe('Testing de Lista de Alumnos', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let alumnoService: StudentService;
  let spyLoadAlumnnos: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AlumnosModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [
        ListaComponent
      ],
      providers: [
        StudentService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    alumnoService = TestBed.inject(StudentService)
    spyLoadAlumnnos = spyOn(alumnoService, 'ObtenerAlumnos').and.callThrough();
    fixture.detectChanges();
  });

  it('Creando Componente Alumnos', () => {
    expect(component).toBeTruthy();
  });

  it('Debe Listar todos Los Cursos Disponibles', () => {
    component.ngOnInit();
    expect(spyLoadAlumnnos).toHaveBeenCalled()
  })

});

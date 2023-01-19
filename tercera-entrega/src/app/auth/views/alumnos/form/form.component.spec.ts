import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormComponent } from './form.component';
import { AlumnosModule } from '../alumnos.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService } from 'src/app/auth/shared/services/student.service';

describe('Testing de Formulario Alumno', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let alumnoService: StudentService;
  let spyCreateAlumnos: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AlumnosModule
      ],
      declarations: [
        FormComponent
      ],
      providers: [
        StudentService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    alumnoService = TestBed.inject(StudentService)
    spyCreateAlumnos = spyOn(alumnoService, 'agregarAlumno').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('NO debe agregar un usuario si el formulario es invalido', () => {
    const alertSpy = spyOn(window, 'alert').and.callThrough()
    component.alumnosFormulario.patchValue({
      name: '',
      LastName: '',
      email:'',
      edad:'',
      sexo:'',
    });
    expect(component.alumnosFormulario.invalid).toBeTrue();
    component.createProduct();
    expect(spyCreateAlumnos).not.toHaveBeenCalledWith(component.alumnosFormulario.value);
    expect(alertSpy).toHaveBeenCalled();
  })
});

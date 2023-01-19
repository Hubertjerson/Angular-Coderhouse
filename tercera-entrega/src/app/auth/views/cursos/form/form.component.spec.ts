import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormComponent } from './form.component';
import { CursosModule } from '../cursos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosService } from 'src/app/auth/shared/services/cursos.service';


describe('Testing de formulario de Cursos', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let cursoService: CursosService;
  let spyCreateCursos: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        CursosModule
      ],
      declarations: [
        FormComponent
      ],
      providers: [
        CursosService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    cursoService = TestBed.inject(CursosService)
    spyCreateCursos = spyOn(cursoService, 'agregarAlumno').and.callThrough();
    fixture.detectChanges();
  });

  it('Creando Componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe Agregar un nuevo Curso' , () => {
    component.cursosFormulario.patchValue({
      id:'Prueba',
      name:'Nombre de Prueba',
      teacher:'Profesor de Prueba',
      code:'Codigo de prueba',
      img:'Img de Prueba',
    });
    component.createProduct();
    expect(spyCreateCursos).toHaveBeenCalledWith(component.cursosFormulario.value)
  })
});

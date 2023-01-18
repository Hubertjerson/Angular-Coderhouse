import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ListaComponent } from './lista.component';
import { CursosModule } from '../cursos.module';
import { CursosService } from 'src/app/auth/shared/services/cursos.service';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let cursosService: CursosService;
  let spyLoadcursos: jasmine.Spy;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CursosModule
      ],
      declarations: [
        ListaComponent
      ],
      providers: [
        CursosService
      ]
    })
      .compileComponents();

      fixture = TestBed.createComponent(ListaComponent);
      component = fixture.componentInstance;
      cursosService = TestBed.inject(CursosService)
      spyLoadcursos = spyOn(cursosService, 'ObtenerCursos').and.callThrough();
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe Listar todos Los Cursos Disponibles', () => {
    component.ngOnInit();
    expect(spyLoadcursos).toHaveBeenCalled()
  })

});

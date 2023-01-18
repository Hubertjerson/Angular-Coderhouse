import { StudentService } from './student.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


describe('StudentService', () => {
    let httpClientspy: jasmine.SpyObj<HttpClient>;
    let alumnoService:StudentService;
    let ALUMNOS = [
        {
            id:1,
            nombre:'prueba',
            apellido:'prueba',
        },
        {
            id:2,
            nombre:'prueba2',
            apellido:'prueba2',
        },
        {
            id:3,
            nombre:'prueba3',
            apellido:'prueba3',
        },
    ]
    beforeEach(() => {
        httpClientspy = jasmine.createSpyObj('httpClient', ['get']);
        alumnoService= new StudentService(httpClientspy);
    });
    describe(' API GETAlumnos() ',()=>{
        it(' Llamando al API GETAlumnos ', ()=>{
            httpClientspy.get.and.returnValue(of(ALUMNOS));
            alumnoService.getAlumnos().subscribe({
                next:(alumnos)=>{
                    setTimeout(() =>{
                        expect(alumnos).toEqual(ALUMNOS);
                    },200);
                },
                error:() => {
                }
            })
            expect(httpClientspy.get).toHaveBeenCalledTimes(1);
        })
    })
});

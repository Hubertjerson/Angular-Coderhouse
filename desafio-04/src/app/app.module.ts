import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ToolbarComponent } from './shared/layout/toolbar/toolbar.component';
import { FormStudentsComponent } from './shared/components/form-students/form-students.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { ReportComponent } from './pages/report/report.component';
import { CursosComponent } from './pages/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    FormStudentsComponent,
    ListStudentComponent,
    ReportComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

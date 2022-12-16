import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ToolbarComponent } from './shared/layout/toolbar/toolbar.component';
import { StudentsComponent } from './pages/students/students.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { StudentDialogFromComponent } from './shared/components/student-dialog-from/student-dialog-from.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    StudentsComponent,
    MyPipePipe,
    StudentDialogFromComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

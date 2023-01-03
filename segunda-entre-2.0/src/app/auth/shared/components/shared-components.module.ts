import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MiMaterialModule } from '../mi-material.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    WrapperComponent,
    AdminlayoutComponent,
    AuthlayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MiMaterialModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    WrapperComponent,
    AdminlayoutComponent,
    AuthlayoutComponent
  ]
})
export class SharedComponentsModule { }

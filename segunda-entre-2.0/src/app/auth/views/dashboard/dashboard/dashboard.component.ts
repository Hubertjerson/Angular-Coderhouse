import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public objecto:any ={};

  constructor(
    private authService:AuthService,
    private router :Router
  ){}

  ngOnInit(): void {
      let token = sessionStorage.getItem("token") as string;
      this.objecto = this.decodificarJWT(token);
  }

  private decodificarJWT(token:string):any{
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  logout(){
    this.authService.clearToken();
    this.router.navigate(['/home']);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  public objecto:any ={};

  constructor(private router: Router,
    private authService:AuthService,
    ) {}

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
    this.router.navigate(['/sessions/login']);
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}

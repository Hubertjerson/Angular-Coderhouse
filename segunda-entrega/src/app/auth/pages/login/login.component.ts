import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit, AfterViewInit{

  constructor(
    private router: Router
  ){}

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "513891600046-u2bje8nkkhuv062q5ar5rgvfgfiqcaq8.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt();
  }

  ngOnInit(): void {
  }

  handleCredentialResponse(response:any){
    console.log(response)
    console.log(this.router)
    if(response.credential){
      console.log(response.credential);
      sessionStorage.setItem("token", response.credential);
      document.location.href = "/login/dashboard";
    }
  }
}

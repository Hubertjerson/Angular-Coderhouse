import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/shared/services/login.service';
declare var google:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit{
  hide: boolean = false;
  loginForm: FormGroup
  constructor(
    private router: Router,
    private loginService:LoginService,
    private fb:FormBuilder
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


  handleCredentialResponse(response:any){
    console.log(response)
    console.log(this.router)
    if(response.credential){
      console.log(response.credential);
      sessionStorage.setItem("token", response.credential);
      document.location.href = "/dashboard";
    }
  }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onLogin() {
    this.loginService.isLogin=true;
    this.router.navigate(['dashboard']);
  }
}

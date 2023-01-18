import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{

  public loading = false;
  public form = new FormGroup({
    email: new FormControl('michael.lawson@reqres.in', [Validators.required]),
    password: new FormControl('cityslicka', [Validators.required]),
  })
  private destroyed$ = new Subject();
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ){}

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  login(){
    this.loading = true;
    this.authService.login({
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || ''
    }).subscribe((user) => {
      this.loading = false
      if(user){
        this.router.navigate(['dashboard'])
      }
    })
  }
}

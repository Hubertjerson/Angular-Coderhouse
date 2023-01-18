import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../store/app.reducer';
import { LoginSuccessful, SingleUserResponse } from '../models/regres.interfaces';
import { setAuthenticatedUser, unsetAuthenticatedUser } from '../store/auth/auth.actions';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://reqres.in/api';

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router
  ) { }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<LoginSuccessful>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token)),
        mergeMap(() =>
          this.http.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        map(
          ({ data }) =>
            new User(
              data.id,
              data.email,
              data.first_name,
              data.last_name,
              data.avatar
            )
        ),
        // tap((user) => this.sessionService.setUser(user))
        tap(
          (user) => this.store.dispatch(
            setAuthenticatedUser({
              authenticatedUser: user
            })
          )
        )
      );
  }

  logOut() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthenticatedUser());
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const lsToken = localStorage.getItem('token');

    return of(lsToken)
      .pipe(
        tap((token) => {
          if (!token) throw new Error('Token invalido')
        }),
        mergeMap((token) =>
          this.http.get<SingleUserResponse>(`${this.apiUrl}/users/7`)
        ),
        tap(({ data }) =>
          this.store.dispatch(
            setAuthenticatedUser({
              authenticatedUser: new User(
                data.id,
                data.email,
                data.first_name,
                data.last_name,
                data.avatar
              )
            })
          )
        ),
        map((user) => !!user),
        catchError(() => of(false))
      )
  }
}

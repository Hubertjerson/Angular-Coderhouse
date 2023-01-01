import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAutenticationByToken(){
    return sessionStorage.getItem("token");
  }

  clearToken(){
    return sessionStorage.setItem("token",'');
  }

}

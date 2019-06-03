import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //userData: User;

  constructor(private http: HttpClient, public  router: Router) {
    
  }


  get isLoggedIn(): boolean {
    return true;
  }


  signup(email: string, password: string, firstname:string, lastname:string, country:string) {
    
  }


  login(email: string, password: string) {
    
  }

  logout() {
    
  }

  private insertUserData(email, firstname, lastname, country) {
    
  }

  private handleAuthError(error) {
    console.log(error)
  }


}

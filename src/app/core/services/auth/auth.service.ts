import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export class User {
  email: string;
  password: string;
  phoneNumber: string;
  displayName: string;
  uid: string | undefined;

  constructor(email, password, phoneNumber, displayName) {
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.displayName = displayName;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://funpay-demo-api.firebaseapp.com';

  constructor(public router: Router, public http: HttpClient) {}

  signup(
    email: string,
    password: string,
    phoneNumber: string,
    displayName: string
  ): Observable<any> {
    const user = new User(email, password, phoneNumber, displayName);
    return this.http.post<User>(`${this.url}/user`, user);
  }

  login(email: string, password: string) {
    this.router.navigate(['/dashboard']);
  }

  logout() {}
}

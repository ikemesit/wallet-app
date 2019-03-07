import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from  "@angular/router";
import { FormsModule, FormGroup } from '@angular/forms';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
  }

  constructor(private auth:AuthService, public router:Router) { }

  ngOnInit() {
  }

  onLogin(lf) {
    this.user.email = lf.value.email;
    this.user.password = lf.value.password;

    this.auth.login(this.user.email, this.user.password);

    this.router.navigate(['dashboard']);
  }

}

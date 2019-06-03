import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FormsModule, FormGroup } from '@angular/forms';
import { Countries } from '../models/countries.model';
import ctry from '../countries.json';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})



export class SignupComponent implements OnInit {

  countries:Countries[] = ctry;

  //sf: FormGroup;

  user = {
    firstname: '',
    lastname: '',
    displayName: '',
    email: '',
    password: '',
    phone: '',
    country: '',
  }

  constructor(private auth:AuthService, public router:Router) { }

  ngOnInit() {
  }

  onSubmit(sf) {
    //console.log(sf);
    this.user.firstname = sf.value.firstname;
    this.user.lastname = sf.value.lastname;
    this.user.displayName = sf.value.firstname+' '+sf.value.lastname;
    this.user.email = sf.value.email;
    this.user.password = sf.value.password;
    this.user.phone = sf.value.phone;
    this.user.country = sf.value.country;
    //console.log(this.user);
    
    this.auth.signup(
      this.user.email, 
      this.user.password, 
      this.user.firstname, 
      this.user.lastname, 
      this.user.country
    );

    this.router.navigate(['dashboard']);
  }

}

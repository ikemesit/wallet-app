import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Countries } from '../../models/countries.model';
import ctry from '@app/assets/countries.json';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  countries: Countries[] = ctry;

  signUpForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  cpassword: FormControl;
  phone: FormControl;
  country: string;

  constructor(
    private auth: AuthService,
    public router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initFormControls();
  }

  initFormControls(): void {
    this.username = this.fb.control('', [Validators.required]);
    this.email = this.fb.control('', [Validators.required]);
    this.password = this.fb.control('', [Validators.required]);
    this.cpassword = this.fb.control('', [Validators.required]);
    this.phone = this.fb.control('', [Validators.required]);

    this.signUpForm = this.fb.group({
      username: this.username,
      email: this.email,
      password: this.password,
      phone: this.phone,
      country: this.country,
    });
  }

  onSubmit() {
    console.log(this.signUpForm.getRawValue());
    // this.router.navigate(['dashboard']);
  }
}

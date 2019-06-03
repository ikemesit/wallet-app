import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import * as firebase from 'firebase/app'

import { User } from  'firebase';

import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: User;

  constructor(private afAuth: AngularFireAuth, private afs:AngularFirestore, public  router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


  get isLoggedIn(): boolean {
    //const user = JSON.parse(localStorage.getItem('user'));
    //return (user !== null && user.emailVerified !== false) ? true : false;
    return true;
  }


  signup(email: string, password: string, firstname:string, lastname:string, country:string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(usercredential => this.insertUserData(email, firstname, lastname, country))
    .catch(error => this.handleAuthError(error));
  }


  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      this.router.navigate(['dashboard']);
    }).catch(function(error) {
      this.handleAuthError(error);
    })
  }

  logout() {
    return this.afAuth.auth.signOut().then(function() {
      console.log('Signed Out');
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }, function(error) {
      console.error('Sign Out Error', error);
    });

  }

  private insertUserData(email, firstname, lastname, country) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        let userdata = this.userData;
        user.updateProfile({
          displayName: firstname,
          photoURL: ''
        })
        return this.afs.doc(`users/${userdata.uid}`).set({
          email: email,
          firstname: firstname,
          lastname: lastname,
          country: country,
        });
      }
    })
  }

  private handleAuthError(error) {
    console.log(error)
  }

  getUserData() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        let uid = user.uid;
        return user;
      }
    })
  }

}

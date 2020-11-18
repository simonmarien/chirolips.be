import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import firebase from 'firebase';
import auth = firebase.auth;
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public isLoggedIn: boolean
  private user: User

  constructor(public firebaseAuth: AngularFireAuth, public afs: AngularFirestore, private router: Router) {

    this.user = auth().currentUser
  }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
        this.user = res.user
      })
  }

  logout() {
    return this.firebaseAuth.signOut().then(() => {this.router.navigate(['login'])})
    //localStorage.removeItem('user')
  }
}

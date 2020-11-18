import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn = false

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signIn(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }

}

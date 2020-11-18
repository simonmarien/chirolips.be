import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  public isLoaded: boolean = true
  constructor(public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout();
    console.log('Logged out')
  }

}

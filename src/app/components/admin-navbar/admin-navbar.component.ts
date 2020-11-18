import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  public isLoaded: boolean = false
  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  async logout(){
    await this.firebaseService.logout()
    console.log('Logged out')
    await this.firebaseService.logout();
    this.isLoaded = false
    this.router.navigate(['home'])
  }

}

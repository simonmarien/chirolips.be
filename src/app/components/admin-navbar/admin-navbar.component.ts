import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lips-angular';

  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
}

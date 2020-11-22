import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-display-dates',
  templateUrl: './display-dates.component.html',
  styleUrls: ['./display-dates.component.scss']
})
export class DisplayDatesComponent implements OnInit {

  dates: Observable<any>
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.dates = this.afs.collection('dates', ref => ref.orderBy('beginDate')).valueChanges()
  }

  removeDate(uid: string){
    this.afs.collection('dates').doc(uid).delete()
  }

}

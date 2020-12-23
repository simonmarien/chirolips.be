import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {element} from 'protractor';

@Component({
  selector: 'app-display-dates',
  templateUrl: './display-dates.component.html',
  styleUrls: ['./display-dates.component.scss']
})
export class DisplayDatesComponent implements OnInit {

  dates: Observable<any>
  array
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    //this.afs.collection('kalender', ref => ref.orderBy('date')).valueChanges().forEach(element => console.log(element))
    let result = this.afs.collection('kalender', ref => ref.orderBy('date')).valueChanges()
    result.forEach( doc => {
      this.array.push(doc.data())
    })
    //this.dates.subscribe(data => {this.array = data as string[]; console.log(this.array); console.log(this.dates)})
  }

  removeDate(uid: string){
    this.afs.collection('dates').doc(uid).delete()
  }

}

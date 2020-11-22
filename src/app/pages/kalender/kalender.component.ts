import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Datum} from '../../objects/datum';

@Component({
  selector: 'app-kalender',
  templateUrl: './kalender.component.html',
  styleUrls: ['./kalender.component.scss']
})
export class KalenderComponent implements OnInit {

  dates: Observable<any>
  refactored_dates: Datum[]
  loaded: boolean = false
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.dates = this.afs.collection('dates', ref => ref.orderBy('beginDate')).valueChanges()

    this.dates.subscribe(date => {
      if (date.endDate.length===0)
        this.refactored_dates.push(new Datum(date.name,date.beginDate,date.description))
      else
        this.refactored_dates.push(new Datum(date.name,date.beginDate,date.description, date.endDate))
      this.loaded = true
    })
    this.refactored_dates.sort((a,b)=> (a.startDate.getDate() > b.startDate.getDate()) ? 1 : -1)
  }


}

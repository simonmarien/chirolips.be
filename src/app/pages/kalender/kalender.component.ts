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
  loaded: boolean = true
  constructor(private afs: AngularFirestore) { }
  async:false
  ngOnInit(): void {
    this.dates = this.afs.collection('dates', ref => ref.orderBy('beginDate')).valueChanges()
    //setTimeout(()=> this.load(),2000)
  }

  load(){
    this.dates.subscribe(date => {
      console.log(date.endDate)
      if (date.endDate.length===0)
        this.refactored_dates.push(new Datum(date.name,date.beginDate,date.description))
      else
        this.refactored_dates.push(new Datum(date.name,date.beginDate,date.description, date.endDate))
      this.loaded = true})
    this.refactored_dates.sort((a,b)=> (a.startDate.getDate() > b.startDate.getDate()) ? 1 : -1)
  }

  getDatum(date){
    return new Datum(date.name,date.beginDate,date.description, date.endDate)
  }

  hasEndDate(date: Date){
    return isNaN(date.getDate())
  }
}

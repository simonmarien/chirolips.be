import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Datum} from '../../objects/datum';

@Component({
  selector: 'app-add-date',
  templateUrl: './add-date.component.html',
  styleUrls: ['./add-date.component.scss']
})
export class AddDateComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private afs: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  addDate(name: string, beginDate: string, endDate: string, description: string) {
    const uid = this.afs.createId();
    const data = {
      name: name,
      beginDate: beginDate,
      endDate: endDate,
      description: description,
      identifier: uid
    };
    if (new Datum(name, beginDate, description, endDate).isOneDay()) {
      this.afs.collection('kalender').doc(endDate.substr(0, 7)).collection('dates').doc(uid).set(data);
    } else {
      this.afs.collection('kalender').doc(beginDate.substr(0, 7)).collection('dates').doc(uid).set(data);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-add-date',
  templateUrl: './add-date.component.html',
  styleUrls: ['./add-date.component.scss']
})
export class AddDateComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  addDate(name: string, beginDate: string, endDate: string, description: string){
    const uid = this.afs.createId()
    const data = {
      name: name,
      beginDate: beginDate,
      endDate: endDate,
      description: description,
      identifier: uid
    }
    this.afs.collection('dates').doc(uid).set(data)
  }
}

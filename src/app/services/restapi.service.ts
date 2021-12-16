import {Injectable} from '@angular/core';
import axios from 'axios';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  private requestUrl = 'https://social-golfer-problem-api.herokuapp.com/';

  private res = new Subject();

  constructor() {
  }

  async getGroups(names: [], groups: number, rounds: number, forbiddenPairs: []) {
    console.log('HERE', forbiddenPairs)
    const body = {
      names: names,
      groups: groups.valueOf(),
      forRounds: rounds.valueOf(),
      forbiddenPairs: forbiddenPairs
    }
    await axios.post(this.requestUrl, body, {headers: {'Content-Type': 'application/json'}}).then(response => {
      console.log(response);
      this.res.next(response.data);
      return response.data;
    });
  }

  getResponseData(): Observable<any> {
    return this.res.asObservable();
  }
}

interface RequestBody {
  names: [];
  groups: number;
  forRounds: number;
  forbiddenPairs: [];
}

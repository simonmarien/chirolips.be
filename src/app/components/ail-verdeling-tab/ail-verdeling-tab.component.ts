import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RestapiService} from '../../services/restapi.service';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-ail-verdeling-tab',
  templateUrl: './ail-verdeling-tab.component.html',
  styleUrls: ['./ail-verdeling-tab.component.scss']
})
export class AilVerdelingTabComponent implements OnInit {

  result: any;

  afdelingen = ['Vedetjes', 'Vedetje', 'Speelclub', 'Rakwi', 'Tito']
  private valueSubscription: Subscription

  constructor(private restApiService: RestapiService, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.valueSubscription = this.restApiService.getResponseData().subscribe((res) => {
      console.log('Observed')
      console.log(res)
      this.result = res;
      this.cd.markForCheck()
    });
  }

  async giveNewGroups(names, groups, rounds, forbiddenPairs) {
    console.log(names, groups, rounds, forbiddenPairs);
    names = this.namesToList(names);
    forbiddenPairs = this.forbiddenPairsToList(forbiddenPairs);
    forbiddenPairs = this.forbiddenPairsToInt(forbiddenPairs, names)
    console.log(forbiddenPairs);
    await this.restApiService.getGroups(names, groups, rounds, forbiddenPairs)
  }


  private namesToList(names) {
    return names.split(' ');
  }

  private forbiddenPairsToList(forbiddenPairs) {
    const list = forbiddenPairs.split(' ');
    const combined = [];
    list.forEach(e => {
      combined.push(e.split('/'));
    });
    return combined;
  }

  private forbiddenPairsToInt(forbiddenPairs, names) {
    const ret = [];
    forbiddenPairs.forEach(x => {
      const i = names.findIndex(element => element === x[0]);
      const j = names.findIndex(element => element === x[1]);
      console.log(i, j)
      if (i > -1 && j > -1) {
        console.log(i, j)
        ret.push([i, j])
      }
    })
    return ret
  }

}

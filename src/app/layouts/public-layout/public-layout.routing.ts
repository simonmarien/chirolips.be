import { Routes } from '@angular/router';
import {HomeComponent} from '../../pages/home/home.component';
import {OverOnsComponent} from '../../pages/over-ons/over-ons.component';
import {KalenderComponent} from '../../pages/kalender/kalender.component';
import {HotlipsComponent} from '../../pages/hotlips/hotlips.component';

export const PublicLayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'over-ons', component: OverOnsComponent},
  { path: 'kalender', component: KalenderComponent},
  { path: 'hotlips', component: HotlipsComponent},
  { path: 'over-ons', component: OverOnsComponent}

];

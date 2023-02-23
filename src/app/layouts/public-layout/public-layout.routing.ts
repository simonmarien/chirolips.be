import { Routes } from '@angular/router';
import {HomeComponent} from '../../pages/home/home.component';
import {OverOnsComponent} from '../../pages/over-ons/over-ons.component';
import {KalenderComponent} from '../../pages/kalender/kalender.component';
import {HotlipsComponent} from '../../pages/hotlips/hotlips.component';
import {AfdelingenComponent} from '../../pages/afdelingen/afdelingen.component';
import {VedetjesComponent} from '../../pages/vedetjes/vedetjes.component';
import {AspirantenComponent} from '../../pages/aspiranten/aspiranten.component';
import {KetisComponent} from '../../pages/ketis/ketis.component';
import {TitosComponent} from '../../pages/titos/titos.component';
import {RakwisComponent} from '../../pages/rakwis/rakwis.component';
import {SpeelclubComponent} from '../../pages/speelclub/speelclub.component';
import {LoginComponent} from '../../pages/login/login.component';
import {RibbekesComponent} from '../../pages/ribbekes/ribbekes.component';
import {VerhuurComponent} from '../../pages/verhuur/verhuur.component';
import {RibbekesfeestenComponent} from "../../pages/ribbekesfeesten/ribbekesfeesten.component";

export const PublicLayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'over-ons', component: OverOnsComponent},
  { path: 'kalender', component: KalenderComponent},
  { path: 'hotlips', component: HotlipsComponent},
  { path: 'over-ons', component: OverOnsComponent},
  { path: 'afdelingen', component: AfdelingenComponent},
  { path: 'vedetjes', component: VedetjesComponent},
  { path: 'speelclub', component: SpeelclubComponent},
  { path: 'rakwis', component: RakwisComponent},
  { path: 'titos', component: TitosComponent},
  { path: 'ketis', component: KetisComponent},
  { path: 'aspiranten', component: AspirantenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'pastaspi', component: RibbekesComponent},
  { path: 'wafeltjes', component: RibbekesComponent},
  { path: 'verhuur', component: VerhuurComponent},
  { path: 'ribbekesfeesten', component: RibbekesfeestenComponent}
];

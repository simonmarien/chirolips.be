import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicLayoutRoutes} from './public-layout.routing';
import {PublicLayoutComponent} from './public-layout.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from '../../components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {HomeComponent} from '../../pages/home/home.component';
import {OverOnsComponent} from '../../pages/over-ons/over-ons.component';
import {KalenderComponent} from '../../pages/kalender/kalender.component';
import {HotlipsComponent} from '../../pages/hotlips/hotlips.component';
import {AfdelingenComponent} from '../../pages/afdelingen/afdelingen.component';
import {VedetjesComponent} from '../../pages/vedetjes/vedetjes.component';
import {SpeelclubComponent} from '../../pages/speelclub/speelclub.component';
import {RakwisComponent} from '../../pages/rakwis/rakwis.component';
import {TitosComponent} from '../../pages/titos/titos.component';
import {KetisComponent} from '../../pages/ketis/ketis.component';
import {AspirantenComponent} from '../../pages/aspiranten/aspiranten.component';
import {LoginComponent} from '../../pages/login/login.component';
import {RibbekesfeestenComponent} from '../../pages/ribbekesfeesten/ribbekesfeesten.component';


@NgModule({
  declarations: [
    HomeComponent,
    OverOnsComponent,
    KalenderComponent,
    HotlipsComponent,
    AfdelingenComponent,
    VedetjesComponent,
    SpeelclubComponent,
    RakwisComponent,
    TitosComponent,
    KetisComponent,
    AspirantenComponent,
    LoginComponent,
    RibbekesfeestenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule
  ]
})

export class PublicLayoutModule {
}

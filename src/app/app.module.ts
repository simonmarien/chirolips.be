import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OverOnsComponent } from './pages/over-ons/over-ons.component';
import { KalenderComponent } from './pages/kalender/kalender.component';
import { HotlipsComponent } from './pages/hotlips/hotlips.component';
import { AfdelingenComponent } from './pages/afdelingen/afdelingen.component';
import { VedetjesComponent } from './pages/vedetjes/vedetjes.component';
import { SpeelclubComponent } from './pages/speelclub/speelclub.component';
import { RakwisComponent } from './pages/rakwis/rakwis.component';
import { TitosComponent } from './pages/titos/titos.component';
import { KetisComponent } from './pages/ketis/ketis.component';
import { AspirantenComponent } from './pages/aspiranten/aspiranten.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    OverOnsComponent,
    KalenderComponent,
    HotlipsComponent,
    AfdelingenComponent,
    VedetjesComponent,
    SpeelclubComponent,
    RakwisComponent,
    TitosComponent,
    KetisComponent,
    AspirantenComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

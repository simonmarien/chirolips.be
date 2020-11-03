import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PublicLayoutRoutes} from './public-layout.routing';
import { PublicLayoutComponent } from './public-layout.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from '../../components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {HomeComponent} from '../../pages/home/home.component';


@NgModule({
  declarations: [HomeComponent],
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

export class PublicLayoutModule {}

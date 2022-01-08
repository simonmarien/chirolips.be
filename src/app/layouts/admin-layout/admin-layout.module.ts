import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {ComponentsModule} from '../../components/components.module';
import {HomeComponent} from '../../pages/home/home.component';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {AdminKalenderComponent} from '../../pages/admin-kalender/admin-kalender.component';
import {AdminHotlipsComponent} from '../../pages/admin-hotlips/admin-hotlips.component';
import {AilVerdelerComponent} from '../../pages/ail-verdeler/ail-verdeler.component';


@NgModule({
  declarations: [DashboardComponent,
    AdminKalenderComponent,
    AdminHotlipsComponent,
    AilVerdelerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule
  ]
})
export class AdminLayoutModule {
}

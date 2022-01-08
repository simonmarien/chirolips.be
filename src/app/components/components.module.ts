import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {AdminNavbarComponent} from './admin-navbar/admin-navbar.component';
import { AddDateComponent } from './add-date/add-date.component';
import { DisplayDatesComponent } from './display-dates/display-dates.component';
import { AilVerdelingTabComponent } from './ail-verdeling-tab/ail-verdeling-tab.component';
import { AilUitlegComponent } from './ail-uitleg/ail-uitleg.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HeaderComponent, ContactComponent, AdminNavbarComponent, AddDateComponent, DisplayDatesComponent, AilVerdelingTabComponent, AilUitlegComponent],
    exports: [
        NavbarComponent,
        FooterComponent,
        HeaderComponent,
        ContactComponent,
        AdminNavbarComponent,
        AddDateComponent,
        DisplayDatesComponent,
        AilVerdelingTabComponent,
        AilUitlegComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class ComponentsModule {
}

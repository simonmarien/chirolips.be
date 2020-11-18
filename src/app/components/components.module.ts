import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {AdminNavbarComponent} from './admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HeaderComponent, ContactComponent, AdminNavbarComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class ComponentsModule {
}

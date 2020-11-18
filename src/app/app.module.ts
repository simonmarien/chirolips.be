import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PublicLayoutComponent} from './layouts/public-layout/public-layout.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCi7nyq311qndTpJrVIcMGjuOscf7I3cNU',
      authDomain: 'chirolips-74bef.firebaseapp.com',
      databaseURL: 'https://chirolips-74bef.firebaseio.com',
      projectId: 'chirolips-74bef',
      storageBucket: 'chirolips-74bef.appspot.com',
      messagingSenderId: '640833801767',
      appId: '1:640833801767:web:92ce066f584febf3c18802',
      measurementId: 'G-PEZEV8JHNM'
    }),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {
}

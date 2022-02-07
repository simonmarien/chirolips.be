import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicLayoutComponent} from './layouts/public-layout/public-layout.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard}
  },
  {
    path: 'pastaspi',
    redirectTo: 'pastaspi',
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: '',
    component: PublicLayoutComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard},
    children: [
      {
        path: '',
        loadChildren: './layouts/public-layout/public-layout.module#PublicLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    children: [
      {
        path: '',
        // loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToDashboard}
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: true})],
  exports: []
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicLayoutComponent} from './layouts/public-layout/public-layout.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        // loadChildren: './app/layouts/public-layout/public-layout.module#PublicLayoutModule',
        loadChildren: './layouts/public-layout/public-layout.module#PublicLayoutModule'
      }
    ]
  },
  {
    path: '*',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})],
  exports: []
})
export class AppRoutingModule {
}

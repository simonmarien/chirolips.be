import {Routes} from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {AdminKalenderComponent} from '../../pages/admin-kalender/admin-kalender.component';
import {AdminHotlipsComponent} from '../../pages/admin-hotlips/admin-hotlips.component';
import {AilVerdelerComponent} from '../../pages/ail-verdeler/ail-verdeler.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin-kalender', component: AdminKalenderComponent},
  { path: 'admin-hotlips', component: AdminHotlipsComponent},
  { path: 'ail-verdeler', component: AilVerdelerComponent}
];

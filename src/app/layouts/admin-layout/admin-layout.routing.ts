import {Routes} from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {AdminKalenderComponent} from '../../pages/admin-kalender/admin-kalender.component';
import {AdminHotlipsComponent} from '../../pages/admin-hotlips/admin-hotlips.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin-kalender', component: AdminKalenderComponent},
  { path: 'admin-hotlips', component: AdminHotlipsComponent}
];

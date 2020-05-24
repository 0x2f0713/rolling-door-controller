import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiConfigComponent } from './wifi-config/wifi-config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './dashboard/status/status.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { DashboardResolverService } from './services/dashboard/dashboard-resolver.service';



const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard/status",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "status",
        component: StatusComponent,
        resolve: {
          userdata: DashboardResolverService
        }
      },
      {
        path: "setting",
        component: SettingComponent
      }
    ]
  },
  // {
  //   path: "setting",
  // },
  {
    path: 'setup',
    component: WifiConfigComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

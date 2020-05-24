import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiConfigComponent } from './wifi-config/wifi-config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './dashboard/status/status.component';
import { SettingComponent } from './dashboard/setting/setting.component';



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
        component: StatusComponent
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WifiConfigComponent } from './wifi-config/wifi-config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './dashboard/status/status.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { ControllerComponent } from './controller/controller.component';

import { DashboardResolverService } from './services/dashboard/dashboard-resolver.service';
import { ConfigResolverService } from './services/config/config-resolver.service';



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
          status: DashboardResolverService
        }
      },
      {
        path: "setting",
        component: SettingComponent,
        resolve: {
          config: ConfigResolverService
        }
      },
      {
        path: "controller",
        component: ControllerComponent
      }
    ]
  },
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

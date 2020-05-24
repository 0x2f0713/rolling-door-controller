import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<Observable<any>>{

  constructor(private db: DashboardService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.db.getStatus().pipe(
      take(1),
      map(userdata => userdata)
    )
  }
}

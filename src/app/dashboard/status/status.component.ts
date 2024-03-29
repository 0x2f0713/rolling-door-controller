import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Status, DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Wi-Fi', cols: 2, rows: 1 },
          { title: 'MQTT', cols: 2, rows: 1 },
        ];
      }

      return [
        { title: 'Wi-Fi', cols: 1, rows: 1 },
        { title: 'MQTT', cols: 1, rows: 1 },
      ];
    })
  );
  status: Status;
  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.status = this.route.snapshot.data.status;
  }
}

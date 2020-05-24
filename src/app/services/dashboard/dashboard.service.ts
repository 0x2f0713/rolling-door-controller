import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Status {
  wifi: {
    status: string,
    ssid: string,
    signal: number
  };
  mqtt: {
    status: string,
    server: string
    port: number
  };
}
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getStatusUrl = 'api/status';

  getStatus() {
    return this.http.get<Status>(this.getStatusUrl);
  }
}

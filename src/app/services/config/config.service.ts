import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Wifi {
  id: number;
  ssid: string;
  signal: number;
  mac_address: string;
  security: boolean;
  password?: string;
}

export interface Config {
  wifi: {
    ssid: string;
    password: string;
  };
  mqtt: {
    server: string;
    port: number;
  };
}
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  scanWifiUrl = '/scanWifi';
  configUrl = '/setConfig';
  getWiFiList() {
    return this.http.get<Wifi[]>(this.scanWifiUrl);
  }
  setConfig(config: Config) {
    return this.http.post<Config>(this.configUrl, config);
  }
}

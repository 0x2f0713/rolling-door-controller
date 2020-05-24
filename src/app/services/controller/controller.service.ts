import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http: HttpClient) { }
  controlUrl = "api/control";
  sendUp() {
    return this.http.post(this.controlUrl, "UP");
  }
  sendDown() {
    return this.http.post(this.controlUrl, "DOWN");
  }
  sendStop() {
    return this.http.post(this.controlUrl, "STOP");
  }
  sendLock() {
    return this.http.post(this.controlUrl, "LOCK");
  }
}

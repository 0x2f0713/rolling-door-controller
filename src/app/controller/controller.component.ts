import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  constructor(private controllerService: ControllerService) { }

  ngOnInit(): void {
  }

  sendUp() {
    return this.controllerService.sendUp().subscribe((data: any) => console.log(data));
  }
  sendDown() {
    return this.controllerService.sendDown().subscribe((data: any) => console.log(data));
  }
  sendStop() {
    return this.controllerService.sendStop().subscribe((data: any) => console.log(data));
  }
  sendLock() {
    return this.controllerService.sendLock().subscribe((data: any) => console.log(data));
  }
}

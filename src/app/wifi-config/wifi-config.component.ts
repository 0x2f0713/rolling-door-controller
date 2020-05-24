import { Component, OnInit } from '@angular/core';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ConfigService, Wifi, Config } from '../services/config/config.service';



@Component({
  selector: 'app-wifi-config',
  templateUrl: './wifi-config.component.html',
  styleUrls: ['./wifi-config.component.scss'],
  providers:[
    ConfigService
  ],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.2, 0.0, 0.2, 2)')
      ),
    ]),
  ],
})
export class WifiConfigComponent implements OnInit {
  breakpoint: number;
  displayedColumns: string[] = [
    'select',
    'id',
    'ssid',
    'signal',
    'mac_address',
    'security',
  ];
  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<Wifi>(
    this.allowMultiSelect,
    this.initialSelection
  );
  config: Config = {
    wifi:{
      ssid: '',
      password: ''
    },
    mqtt: {
      server:'546.lan',
      port:8883
    }
  };
  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty('detailRow');
  choosedElement: Wifi;
  hide: boolean = true;
  WifiList: Wifi[];
  // dataSource = new WifiDataSource(this.WifiList);
  dataSource: any;
  constructor( private wifiService: ConfigService) {}

  ngOnInit() {}
  getWiFiList() {
    this.wifiService.getWiFiList().subscribe((data: Wifi[]) => this.dataSource=new WifiDataSource(data));
  }
  printRow(row) {
    console.log(row);
  }
  chooseWifi(wifi: Wifi) {
    this.choosedElement = wifi,
    this.config.wifi.ssid = wifi.ssid
  }
  setConfig() {
    this.wifiService.setConfig(this.config).subscribe((data) => console.log(data))
  }
}

export class WifiDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private data: Wifi[]) {
    super();
  };
  connect(): Observable<Element[]> {
    const rows = [];
    this.data.forEach((element) =>
      rows.push(element, { detailRow: true, element })
    );
    console.log(rows);
    return of(rows);
  }

  disconnect() {}
}

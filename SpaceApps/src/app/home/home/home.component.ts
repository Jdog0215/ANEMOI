import { Component, OnInit } from '@angular/core';
// import * as SerialPort from 'serialport';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // port: any = new SerialPort("COM7", {
  //   baudRate: 9600
  // });

  constructor() { }

    ngOnInit() {
      // this.port.on('data',data => {
      //   const obj = JSON.parse(data)
      //   console.log(`Time: ${obj.time} Read: ${obj.data}`)
      // })
    }

}

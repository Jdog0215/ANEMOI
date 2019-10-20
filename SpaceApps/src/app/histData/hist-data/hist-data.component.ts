import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-hist-data',
  templateUrl: './hist-data.component.html',
  styleUrls: ['./hist-data.component.scss']
})
export class HistDataComponent implements OnInit {
  displayedColumns: string[] = ['Day Average', 'Read'];
  dataSource = new MatTableDataSource<historicalReadings>(ELEMENT_DATA);
  constructor() { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface historicalReadings {
  Day: String;
  Read: Number
}

const ELEMENT_DATA: historicalReadings[] = [
  {Day: "11/10/2019", Read: 20},
  {Day: "12/10/2019", Read: 21},
  {Day: "13/10/2019", Read: 31},
  {Day: "10/12/2012", Read: 25},
  {Day: "14/10/2019", Read: 20},
  {Day: "15/10/2019", Read: 20},
  {Day: "16/10/2019", Read: 18},
  {Day: "17/10/2019", Read: 20},
  {Day: "18/10/2019", Read: 22},
  {Day: "19/10/2019", Read: 20},
  {Day: "15/10/2019", Read: 20},
  {Day: "16/10/2019", Read: 18},
  {Day: "17/10/2019", Read: 20},
  {Day: "18/10/2019", Read: 22},
  {Day: "19/10/2019", Read: 20}
];




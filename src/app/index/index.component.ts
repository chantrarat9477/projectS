import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  // ข้อมูลในเส้นกราฟมี24ข้อมูลตามเวลา24ชั่วโมง
  public lineChartData: Array<any> = [
    { data: [27.7, 30, 50, 80, 5, 33, 99, 22, 89, 9, 22, 89, 27.7, 30, 50, 80, 5, 33, 99, 22, 89, 9, 22, 89], label: 'อุณหภูมิ' },
    { data: [20, 80, 34, 42, 19, 17, 20, 22, 89, 9, 22, 89, 67.5, 40.3, 50, 80, 5, 33, 99, 22, 89, 9, 22, 89], label: 'ความชื้น' }
 
  ];

  //อาเรย์ที่เก็บข้อมูลในแต่ละชั่วโมง
  public lineChartLabels: Array<any> = 
  ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00',
   '12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'];


  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  //ไม่แน่ใจว่าเก็บไว้ทำไมแต่อยากให้เก็บไว้
  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  //ไม่แน่ใจว่าเก็บไว้ทำไมแต่อยากให้เก็บไว้

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  

}

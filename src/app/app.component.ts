import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-30-01';
  color = 'red';


  reservoirs: reservoirClass[] = [
    new reservoirClass(23),
    new reservoirClass(53),
    new reservoirClass(35),
    new reservoirClass(88),
    new reservoirClass(3),
    new reservoirClass(40),
    new reservoirClass(12),
    new reservoirClass(59)
  ];

  changeTextAndColor(indexReservoir: number) {
    if (this.reservoirs[indexReservoir].percentReservoir == 100) {
      this.reservoirs[indexReservoir].percentReservoir = 100;
      return;
    }
    this.reservoirs[indexReservoir].percentReservoir = this.reservoirs[indexReservoir].percentReservoir + 1;
    this.color = 'green';
  }

}

export class reservoirClass {
  percentReservoir: number;

  constructor(percentReservoir: number) {
    this.percentReservoir = percentReservoir;
  }
}

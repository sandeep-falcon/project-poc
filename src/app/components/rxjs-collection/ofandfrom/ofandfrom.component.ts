import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-ofandfrom',
  standalone: true,
  imports: [],
  templateUrl: './ofandfrom.component.html',
  styleUrl: './ofandfrom.component.scss',
})
export class OfandfromComponent {
  constructor(private dataService: DataService) {}

  dataOF: number[] = [];
  dataFROM: number[] = [];

  getDataWithOF() {
    this.dataService.getDataWithOF().subscribe((res: number) => {
      console.log('res data', res);
      this.dataOF.push(res);
    });
  }

  getDataWithFrom() {
    this.dataService.getDataWithFROM().subscribe((res: number) => {
      console.log('res data', res);
      this.dataFROM.push(res);
    });
  }
}

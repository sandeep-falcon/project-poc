import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-combine-latest-and-fork-join',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './combine-latest-and-fork-join.component.html',
  styleUrl: './combine-latest-and-fork-join.component.scss',
})
export class CombineLatestAndForkJoinComponent {
  combineLatestData: number[] = [];
  forkJoinData: number[] = [];
  constructor(private dataService: DataService) { }

  getCombineLatest() {
    this.dataService.getCombineLatest().subscribe((res) => {
      console.log('CombineLatest values', res);
      this.combineLatestData.push(...res);
    });
  }

  getForkJoin() {
    this.dataService.getForkJoin().subscribe((res) => {
      console.log('ForkJoin values', res);
      this.forkJoinData.push(...res);
    });
  }
}

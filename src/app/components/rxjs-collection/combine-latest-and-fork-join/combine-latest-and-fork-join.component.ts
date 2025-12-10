import { Component, signal } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { SubHeaderComponent } from "../../sub-header/sub-header.component";

@Component({
    selector: 'app-combine-latest-and-fork-join',
    imports: [ButtonModule, SubHeaderComponent],
    templateUrl: './combine-latest-and-fork-join.component.html',
    styleUrl: './combine-latest-and-fork-join.component.scss'
})
export class CombineLatestAndForkJoinComponent {
  title: string = 'CombineLatest and ForkJoin';
  combineLatestData = signal<string[]>([]);
  forkJoinData = signal<number[]>([]);
  combineSubs!: Subscription;
  forkJoinSubs!: Subscription;
  constructor(private dataService: DataService) {}

  getCombineLatest() {
    this.dataService.getCombineLatest().subscribe((res) => {
      console.log('CombineLatest values', res);
      this.combineLatestData.update((prevData: string[]) => [
        ...prevData,
        JSON.stringify(res),
      ]);
    });
  }

  getForkJoin() {
    this.dataService.getForkJoin().subscribe((res) => {
      console.log('ForkJoin values', res);
      this.forkJoinData.update((prevData: number[]) => [...prevData, ...res]);
    });
  }

  ngOnDestroy() {
    this.combineSubs?.unsubscribe();
    this.forkJoinSubs?.unsubscribe();
  }
}

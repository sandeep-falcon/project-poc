import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { delay, mergeMap, of, Subscription } from 'rxjs';
import { SubHeaderComponent } from '../../sub-header/sub-header';

@Component({
    selector: 'app-mergemap',
    imports: [MatButtonModule, SubHeaderComponent],
    templateUrl: './mergemap.html',
    styleUrl: './mergemap.scss'
})
export class MergemapComponent {
  title = 'mergeMap';
  mergeMapData = signal<number[]>([]);
  mergeMapSub!: Subscription;
  sourceObservable = of(1, 2, 3, 4, 5);

  $mergeMap = this.sourceObservable.pipe(
    mergeMap((value) => {
      return of(value).pipe(delay(1000));
    })
  );

  getData() {
    this.mergeMapSub = this.$mergeMap.subscribe((res) => {
      console.log('mergeMap res', res);
      this.mergeMapData.update((prevData: number[]) => [...prevData, res]);
      console.log('mergeMapData', this.mergeMapData());
    });
  }

  ngOnDestroy() {
    this.mergeMapSub?.unsubscribe();
  }
}

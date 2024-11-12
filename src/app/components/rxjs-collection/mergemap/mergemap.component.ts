import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { delay, mergeMap, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './mergemap.component.html',
  styleUrl: './mergemap.component.scss',
})
export class MergemapComponent {
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

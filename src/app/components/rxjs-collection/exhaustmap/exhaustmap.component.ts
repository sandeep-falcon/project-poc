import { Component, signal } from '@angular/core';
import { delay, exhaustMap, from, of, Subscription } from 'rxjs';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-exhaustmap',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './exhaustmap.component.html',
  styleUrl: './exhaustmap.component.scss',
})
export class ExhaustmapComponent {
  exhaustMapData = signal<number[]>([]);
  exhaustMapSub!: Subscription;
  sourceObservable = from([1, 2, 3, 4, 5]);

  $exhaustMap = this.sourceObservable.pipe(
    exhaustMap((value) => {
      console.log('aa',value);
      return of(value).pipe(delay(1000));
    })
  );

  getData() {
    this.exhaustMapSub = this.$exhaustMap.subscribe((res) => {
      console.log('exhaustMap res', res);
      this.exhaustMapData.update((prevData) => [...prevData, res]);
      console.log('exhaustMapData', this.exhaustMapData());
    });
  }

  ngOnDestroy() {
    this.exhaustMapSub?.unsubscribe();
  }
}

import { Component, signal } from '@angular/core';
import { delay, exhaustMap, from, of, Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { SubHeaderComponent } from '../../sub-header/sub-header.component';

@Component({
    selector: 'app-exhaustmap',
    imports: [ButtonModule, SubHeaderComponent],
    templateUrl: './exhaustmap.component.html',
    styleUrl: './exhaustmap.component.scss'
})
export class ExhaustmapComponent {
  title: string = 'ExhaustMap';
  exhaustMapData = signal<number[]>([]);
  exhaustMapSub!: Subscription;
  sourceObservable = from([1, 2, 3, 4, 5]);

  $exhaustMap = this.sourceObservable.pipe(
    exhaustMap((value) => {
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

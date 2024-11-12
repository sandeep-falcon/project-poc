import { Component, signal } from '@angular/core';
import { delay, from, of, Subscription, switchMap } from 'rxjs';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-switchmap',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './switchmap.component.html',
  styleUrl: './switchmap.component.scss',
})
export class SwitchmapComponent {
  switchMapData = signal<number[]>([]);
  switchMapSub!: Subscription;

  $switchMap = from([1, 2, 3, 4]).pipe(
    switchMap((data) => {
      console.log('inside switchMap', data);
      return of(data).pipe(delay(1000));
    })
  );

  getData() {
    //? 4 as switchMap cancels all previous observables when new observable is emitted
    this.switchMapSub = this.$switchMap.subscribe((res) => {
      console.log('switch map res', res);
      this.switchMapData.update((prevData: number[]) => [...prevData, res]);
    });
  }

  ngOnDestroy() {
    this.switchMapSub?.unsubscribe();
  }
}

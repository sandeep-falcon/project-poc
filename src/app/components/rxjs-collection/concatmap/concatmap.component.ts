import { Component, signal } from '@angular/core';
import { concatMap, delay, of, Subscription } from 'rxjs';
import { MaterialModule } from '../../../material/material.module';
import { SubHeaderComponent } from "../../sub-header/sub-header.component";

@Component({
  selector: 'app-concatmap',
  standalone: true,
  imports: [MaterialModule, SubHeaderComponent],
  templateUrl: './concatmap.component.html',
  styleUrl: './concatmap.component.scss',
})
export class ConcatmapComponent {
  title: string = 'ConcatMap';
  concatMapData = signal<number[]>([]);
  concatMapSub!: Subscription;
  sourceObservable = of(1, 2, 3, 4, 5);

  $concatMap = this.sourceObservable.pipe(
    concatMap((value) => {
      return of(value).pipe(delay(1000));
    })
  );

  getData() {
    this.concatMapSub = this.$concatMap.subscribe((res) => {
      console.log('concatMap res', res);
      this.concatMapData.update((prevData: number[]) => [...prevData, res]);
      console.log('concatMapData', this.concatMapData());
    });
  }

  ngOnDestroy() {
    this.concatMapSub?.unsubscribe();
  }
}

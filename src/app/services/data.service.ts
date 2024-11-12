import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  createCustomObservable(): Observable<number> {
    return new Observable((sub) => {
      let count = 0;
      const intervalId = setInterval(() => {
        count++;
        sub.next(count);

        if (count === 5) {
          sub.complete();
          console.log('Observable completed');
        }
      }, 1000);
    });
  }

  getDataWithOF(): Observable<number> {
    return of(1, 2, 3, 4, 5);
  }

  getDataWithFROM(): Observable<number> {
    return from([1, 2, 3, 4, 5]);
  }

  observables = [of(1, 2, 3, 4, 5), from([10, 11, 12, 13, 14])];
  getCombineLatest() {
    return combineLatest(this.observables);
  }
  getForkJoin() {
    return forkJoin(this.observables);
  }
}

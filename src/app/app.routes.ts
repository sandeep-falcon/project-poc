import { Routes } from '@angular/router';
import { RxjsCollectionComponent } from './components/rxjs-collection/rxjs-collection.component';
import { OfandfromComponent } from './components/rxjs-collection/ofandfrom/ofandfrom.component';
import { CombineLatestAndForkJoinComponent } from './components/rxjs-collection/combine-latest-and-fork-join/combine-latest-and-fork-join.component';
import { SwitchmapComponent } from './components/rxjs-collection/switchmap/switchmap.component';
import { AngularCollectionComponent } from './components/angular-collection/angular-collection.component';
import { SignalsComponent } from './components/angular-collection/signals/signals.component';
import { MergemapComponent } from './components/rxjs-collection/mergemap/mergemap.component';
import { ConcatmapComponent } from './components/rxjs-collection/concatmap/concatmap.component';
import { ExhaustmapComponent } from './components/rxjs-collection/exhaustmap/exhaustmap.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'rxjs',
    component: RxjsCollectionComponent,
    title: 'RxJS Collection',
  },
  {
    path: 'rxjs',
    children: [
      {
        path: 'ofandfrom',
        component: OfandfromComponent,
        title: 'of and from - RxJs',
      },
      {
        path: 'clfj',
        component: CombineLatestAndForkJoinComponent,
        title: 'combineLatest and forkJoin - RxJs',
      },
      {
        path: 'switchmap',
        component: SwitchmapComponent,
        title: 'switchMap - RxJs',
      },
      {
        path: 'mergemap',
        component: MergemapComponent,
        title: 'mergeMap - RxJs',
      },
      {
        path: 'concatmap',
        component: ConcatmapComponent,
        title: 'concatMap - RxJs',
      },
      {
        path: 'exhaustmap',
        component: ExhaustmapComponent,
        title: 'exhaustMap - RxJs',
      },
    ],
  },
  {
    path: 'angular',
    component: AngularCollectionComponent,
    title: 'Angular Collection',
  },
  {
    path: 'angular',
    children: [
      {
        path: 'signals',
        component: SignalsComponent,
        title: 'Signals - Angular',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

import { Routes } from '@angular/router';
import { RxjsCollectionComponent } from './components/rxjs-collection/rxjs-collection.component';
import { ObservablesComponent } from './components/rxjs-collection/observables/observables.component';
import { OfandfromComponent } from './components/rxjs-collection/ofandfrom/ofandfrom.component';
import { CombineLatestAndForkJoinComponent } from './components/rxjs-collection/combine-latest-and-fork-join/combine-latest-and-fork-join.component';
import { SwitchmapComponent } from './components/rxjs-collection/switchmap/switchmap.component';
import { AngularCollectionComponent } from './components/angular-collection/angular-collection.component';
import { SignalsComponent } from './components/angular-collection/signals/signals.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/rxjs',
  },
  {
    path: 'rxjs',
    component: RxjsCollectionComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
  },
  {
    path: 'ofandfrom',
    component: OfandfromComponent,
  },
  {
    path: 'clfj',
    component: CombineLatestAndForkJoinComponent,
  },
  {
    path: 'switchmap',
    component: SwitchmapComponent,
  },
  {
    path: 'angular',
    component: AngularCollectionComponent
  },
  {
    path: 'signals',
    component: SignalsComponent
    ,
  },
];

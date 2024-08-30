import { Routes } from '@angular/router';
import { RxjsCollectionComponent } from './components/rxjs-collection/rxjs-collection.component';

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
];

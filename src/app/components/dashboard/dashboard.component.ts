import { Component } from '@angular/core';
import { CollectionInterface } from '../../interface/collection-interface';
import { RouterLink } from '@angular/router';
import { SubHeaderComponent } from '../sub-header/sub-header.component';

@Component({
    selector: 'app-dashboard',
    imports: [RouterLink, SubHeaderComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title: string = 'Dashboard';
  collections: CollectionInterface[] = [
    {
      label: 'rxJs collections',
      route: '/rxjs',
    },
    {
      label: 'angular collections',
      route: '/angular',
    },
  ];
}

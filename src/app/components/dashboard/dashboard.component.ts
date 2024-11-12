import { Component } from '@angular/core';
import { CollectionInterface } from '../../interface/collection-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
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

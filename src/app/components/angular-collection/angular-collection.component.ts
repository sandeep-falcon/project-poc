import { Component } from '@angular/core';
import { CollectionInterface } from '../../interface/collection-interface';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-angular-collection',
  standalone: true,
  imports: [RouterLink, MatRippleModule],
  templateUrl: './angular-collection.component.html',
  styleUrl: './angular-collection.component.scss'
})
export class AngularCollectionComponent {
  collection: CollectionInterface[] = [
    {
      label: 'Signals',
      route: 'signals',
    },
  ];
}

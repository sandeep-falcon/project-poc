import { Component } from '@angular/core';
import { CollectionInterface } from '../../interface/collection-interface';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';

@Component({
  selector: 'app-angular-collection',
  standalone: true,
  imports: [RouterLink, MatRippleModule, SubHeaderComponent],
  templateUrl: './angular-collection.component.html',
  styleUrl: './angular-collection.component.scss',
})
export class AngularCollectionComponent {
  title: string = 'Angular Collection';
  angularCollection: CollectionInterface[] = [
    {
      label: 'Signals',
      route: 'signals',
    },
  ];
}

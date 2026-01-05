import { Component } from '@angular/core';
import { CollectionInterface } from '../../interface/collection-interface';
import { RouterLink } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { SubHeaderComponent } from '../sub-header/sub-header';

@Component({
    selector: 'app-angular-collection',
    imports: [RouterLink, MatRippleModule, SubHeaderComponent],
    templateUrl: './angular-collection.html',
    styleUrl: './angular-collection.scss'
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

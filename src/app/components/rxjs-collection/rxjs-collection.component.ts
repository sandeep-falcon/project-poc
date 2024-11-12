import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { CollectionInterface } from '../../interface/collection-interface';

@Component({
  selector: 'app-rxjs-collection',
  standalone: true,
  imports: [MatRippleModule, RouterLink],
  templateUrl: './rxjs-collection.component.html',
  styleUrl: './rxjs-collection.component.scss',
})
export class RxjsCollectionComponent {
  rxJsCollection: CollectionInterface[] = [
    {
      label: 'of and from',
      route: 'ofandfrom',
    },
    {
      label: 'CombineLatest and forkJoin',
      route: 'clfj',
    },
    {
      label: 'SwitchMap',
      route: 'switchmap',
    },
    {
      label: 'MergeMap',
      route: 'mergemap',
    },
    {
      label: 'ConcatMap',
      route: 'concatmap',
    },
    {
      label: 'ExhaustMap',
      route: 'exhaustmap',
    },
  ];
}

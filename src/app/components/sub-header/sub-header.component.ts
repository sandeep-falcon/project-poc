import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Location } from '@angular/common';

@Component({
    selector: 'app-sub-header',
    imports: [MaterialModule],
    templateUrl: './sub-header.component.html',
    styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
  @Input() title!: string;
  constructor(private _location: Location) {}
  goToBack() {
    this._location.back();
  }
}

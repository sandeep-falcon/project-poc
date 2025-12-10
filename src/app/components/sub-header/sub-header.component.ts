import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sub-header',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
  @Input() title!: string;
  constructor(private _location: Location) { }
  goToBack() {
    this._location.back();
  }
}

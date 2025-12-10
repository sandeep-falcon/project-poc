import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sub-header',
    imports: [ToolbarModule, ButtonModule],
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

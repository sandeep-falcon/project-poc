import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
    selector: 'app-header',
    imports: [MaterialModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'project poc';
  @Input() drawer: any;
}

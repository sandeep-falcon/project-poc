import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MenuListInterface } from '../../interface/menu-list-interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-menu',
    imports: [MaterialModule, RouterLink, RouterLinkActive],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {
  list: MenuListInterface[] = [
    {
      label: 'dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      label: 'rxjs collection',
      icon: 'local_library',
      route: '/rxjs',
    },
    {
      label: 'angular collection',
      icon: 'local_library',
      route: '/angular',
    },
  ];
}

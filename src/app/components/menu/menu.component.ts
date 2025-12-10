import { Component } from '@angular/core';
import { MenuListInterface } from '../../interface/menu-list-interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
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

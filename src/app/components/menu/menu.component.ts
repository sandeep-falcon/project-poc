import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MenuListInterface } from '../../interface/menu-list-interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  list: MenuListInterface[] = [
    {
      label: 'rxjs collection',
      icon: 'home',
      route: '/rxjs',
    },
    {
      label: 'angular collection',
      icon: 'home',
      route: '/angular',
    },
  ];
}

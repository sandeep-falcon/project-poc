import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  imports: [MenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-objects-column',
        routerLink: '/dashboard',
        styleClass: 'text-capitalize'
      },
      {
        label: 'RxJS Collection',
        icon: 'pi pi-book',
        routerLink: '/rxjs',
        styleClass: 'text-capitalize'
      },
      {
        label: 'Angular Collection',
        icon: 'pi pi-book',
        routerLink: '/angular',
        styleClass: 'text-capitalize'
      },
    ];
  }
}

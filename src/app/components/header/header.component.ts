import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
    imports: [ToolbarModule, ButtonModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title = 'project poc';
  @Output() toggleSidebar = new EventEmitter<void>();
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'About',
              icon: 'pi pi-info-circle'
          }
      ];
  }
}

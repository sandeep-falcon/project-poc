import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MenuComponent, DrawerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  screenWidth = signal(window.innerWidth);
  sidebarVisible = false;

  toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
  }


  constructor() {
    this.calculateWidthOnScreenResize();
  }
  // Function to calculate the screen width on page load and on screen size change
  calculateWidthOnScreenResize() {
    // set screenWidth on page load
    window.onresize = () => {
      this.screenWidth.set(window.innerWidth);
    };
  }
}

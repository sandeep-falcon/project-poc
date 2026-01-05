import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { MenuComponent } from './components/menu/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MenuComponent, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  screenWidth = signal(window.innerWidth);

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

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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

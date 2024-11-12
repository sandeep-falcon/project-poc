import { Component, computed, effect, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SubHeaderComponent } from "../../sub-header/sub-header.component";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [MaterialModule, SubHeaderComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  title: string = 'Signals';
  // counter: number = 0;
  // message: string[] = [];

  // ngOnChanges() {
  //   console.log('ngOnChanges runs');
  // }

  // ngDoCheck() {
  //   console.log('Change Detection runs');
  // }

  // increment() {
  //   this.counter++;
  // }

  // decrement() {
  //   this.counter--;
  // }

  // !! Implementing signals version

  counterValue = signal<number>(0); //? This signal knows as writable signal, Because here we can update the value of signal
  doubleCounterValue = computed(() => this.counterValue() * 2); // ? Compute value form respective writable signal, whenever the signal value changes its compute new value.
  message = signal<string[]>([]);

  constructor() {
    effect(() => {
      // ? whenever we want to execute some code when the value of a signal changes.
      console.log('The current counter value is:', this.counterValue());
    });
  }

  ngOnChanges() {
    console.log('ngOnChanges runs');
  }

  ngDoCheck() {
    console.log('Change Detection runs');
  }

  increment() {
    // this.counterValue.set(2);
    // this.counterValue.set(this.counterValue() + 1); // ? setting the new value based on previous value, witch is not good set should be use for only new values.

    this.counterValue.update((prevValue) => prevValue + 1); // ? update() is used for immutable dataTypes or primitives eg: string, numbers, boolean
    this.message.update((prevMsg: string[]) => {
      prevMsg.push('Current value of counter: ' + this.counterValue())
      return prevMsg; //? return new array to avoid mutation of original array
    });
  }

  decrement() {
    this.counterValue.update((prevValue) => prevValue - 1);
    this.message.update((prevMsg) => {
      prevMsg.pop();
      return prevMsg; //? return new array to avoid mutation of original array
    });
  }
}

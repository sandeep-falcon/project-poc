import { Component, signal } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MaterialModule } from '../../../material/material.module';
import { Subscription } from 'rxjs';
import { SubHeaderComponent } from '../../sub-header/sub-header.component';

@Component({
    selector: 'app-ofandfrom',
    imports: [MaterialModule, SubHeaderComponent],
    templateUrl: './ofandfrom.component.html',
    styleUrl: './ofandfrom.component.scss'
})
export class OfandfromComponent {
  title: string = 'Of and From';
  constructor(private dataService: DataService) {}

  dataOF = signal<number[]>([]);
  dataFROM = signal<number[]>([]);
  OfSubs!: Subscription;
  FROMSubs!: Subscription;

  getDataWithOF() {
    this.dataService.getDataWithOF().subscribe((res: number) => {
      console.log('getDataWithOF', res);
      this.dataOF.update((prevData: number[]) => [...prevData, res]);
    });
  }

  getDataWithFrom() {
    this.dataService.getDataWithFROM().subscribe((res: number) => {
      console.log('getDataWithFROM', res);
      this.dataFROM.update((prevData: number[]) => [...prevData, res]);
    });
  }

  ngOnDestroy() {
    this.OfSubs?.unsubscribe();
    this.FROMSubs?.unsubscribe();
  }
}

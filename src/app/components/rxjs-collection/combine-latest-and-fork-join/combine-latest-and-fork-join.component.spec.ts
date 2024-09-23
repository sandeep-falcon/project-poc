import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestAndForkJoinComponent } from './combine-latest-and-fork-join.component';

describe('CombineLatestAndForkJoinComponent', () => {
  let component: CombineLatestAndForkJoinComponent;
  let fixture: ComponentFixture<CombineLatestAndForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestAndForkJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestAndForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

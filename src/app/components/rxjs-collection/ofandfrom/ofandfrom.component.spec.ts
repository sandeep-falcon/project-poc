import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfandfromComponent } from './ofandfrom.component';

describe('OfandfromComponent', () => {
  let component: OfandfromComponent;
  let fixture: ComponentFixture<OfandfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfandfromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfandfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

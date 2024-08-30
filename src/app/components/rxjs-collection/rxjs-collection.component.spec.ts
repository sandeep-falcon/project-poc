import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCollectionComponent } from './rxjs-collection.component';

describe('RxjsCollectionComponent', () => {
  let component: RxjsCollectionComponent;
  let fixture: ComponentFixture<RxjsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

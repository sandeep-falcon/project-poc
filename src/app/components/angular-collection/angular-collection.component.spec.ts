import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCollectionComponent } from './angular-collection.component';

describe('AngularCollectionComponent', () => {
  let component: AngularCollectionComponent;
  let fixture: ComponentFixture<AngularCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: PlanIndexComponent;
  let fixture: ComponentFixture<PlanIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

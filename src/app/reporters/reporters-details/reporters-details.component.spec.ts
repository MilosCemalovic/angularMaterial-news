import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportersDetailsComponent } from './reporters-details.component';

describe('ReportersDetailsComponent', () => {
  let component: ReportersDetailsComponent;
  let fixture: ComponentFixture<ReportersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportersComponent } from './reporters.component';

describe('ReportersComponent', () => {
  let component: ReportersComponent;
  let fixture: ComponentFixture<ReportersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

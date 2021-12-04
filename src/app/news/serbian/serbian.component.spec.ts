import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerbianComponent } from './serbian.component';

describe('SerbianComponent', () => {
  let component: SerbianComponent;
  let fixture: ComponentFixture<SerbianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerbianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerbianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

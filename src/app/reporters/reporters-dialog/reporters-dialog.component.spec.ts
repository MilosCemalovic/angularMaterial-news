import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportersDialogComponent } from './reporters-dialog.component';

describe('ReportersDialogComponent', () => {
  let component: ReportersDialogComponent;
  let fixture: ComponentFixture<ReportersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

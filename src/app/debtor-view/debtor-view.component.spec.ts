import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorViewComponent } from './debtor-view.component';

describe('DebtorViewComponent', () => {
  let component: DebtorViewComponent;
  let fixture: ComponentFixture<DebtorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

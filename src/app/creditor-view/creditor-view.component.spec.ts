import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorViewComponent } from './creditor-view.component';

describe('CreditorViewComponent', () => {
  let component: CreditorViewComponent;
  let fixture: ComponentFixture<CreditorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

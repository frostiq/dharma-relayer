import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterViewComponent } from './underwriter-view.component';

describe('UnderwriterViewComponent', () => {
  let component: UnderwriterViewComponent;
  let fixture: ComponentFixture<UnderwriterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwriterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwriterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

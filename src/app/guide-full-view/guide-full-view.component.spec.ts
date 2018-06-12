import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideFullViewComponent } from './guide-full-view.component';

describe('GuideFullViewComponent', () => {
  let component: GuideFullViewComponent;
  let fixture: ComponentFixture<GuideFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

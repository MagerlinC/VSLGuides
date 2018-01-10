import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqitemComponent } from './faqitem.component';

describe('FaqitemComponent', () => {
  let component: FaqitemComponent;
  let fixture: ComponentFixture<FaqitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

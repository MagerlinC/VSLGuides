import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfaqComponent } from './newfaq.component';

describe('NewfaqComponent', () => {
  let component: NewfaqComponent;
  let fixture: ComponentFixture<NewfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

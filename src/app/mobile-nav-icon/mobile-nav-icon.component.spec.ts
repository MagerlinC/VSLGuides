import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavIconComponent } from './mobile-nav-icon.component';

describe('MobileNavIconComponent', () => {
  let component: MobileNavIconComponent;
  let fixture: ComponentFixture<MobileNavIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

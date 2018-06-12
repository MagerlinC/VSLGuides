import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavitemComponent } from './sidenavitem.component';

describe('SidenavitemComponent', () => {
  let component: SidenavitemComponent;
  let fixture: ComponentFixture<SidenavitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

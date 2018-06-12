import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewguideitemComponent } from './newguideitem.component';

describe('NewguideitemComponent', () => {
  let component: NewguideitemComponent;
  let fixture: ComponentFixture<NewguideitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewguideitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewguideitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

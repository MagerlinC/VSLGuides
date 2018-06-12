import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewguideComponent } from './newguide.component';

describe('NewguideComponent', () => {
  let component: NewguideComponent;
  let fixture: ComponentFixture<NewguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

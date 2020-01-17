import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetForm01Component } from './ret-form01.component';

describe('RetForm01Component', () => {
  let component: RetForm01Component;
  let fixture: ComponentFixture<RetForm01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetForm01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetForm01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

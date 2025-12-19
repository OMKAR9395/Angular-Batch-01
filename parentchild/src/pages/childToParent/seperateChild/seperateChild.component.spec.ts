/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeperateChildComponent } from './seperateChild.component';

describe('SeperateChildComponent', () => {
  let component: SeperateChildComponent;
  let fixture: ComponentFixture<SeperateChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeperateChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

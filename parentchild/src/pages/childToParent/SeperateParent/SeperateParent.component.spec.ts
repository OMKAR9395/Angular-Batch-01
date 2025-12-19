/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeperateParentComponent } from './SeperateParent.component';

describe('SeperateParentComponent', () => {
  let component: SeperateParentComponent;
  let fixture: ComponentFixture<SeperateParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeperateParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperateParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

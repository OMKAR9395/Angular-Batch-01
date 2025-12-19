import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation } from './encapsulation';

describe('Encapsulation', () => {
  let component: Encapsulation;
  let fixture: ComponentFixture<Encapsulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encapsulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encapsulation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndoorBehaviorComponent } from './indoor-behavior.component';

describe('IndoorBehaviorComponent', () => {
  let component: IndoorBehaviorComponent;
  let fixture: ComponentFixture<IndoorBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

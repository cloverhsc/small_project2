/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UricAcidComponent } from './uric-acid.component';

describe('UricAcidComponent', () => {
  let component: UricAcidComponent;
  let fixture: ComponentFixture<UricAcidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UricAcidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UricAcidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

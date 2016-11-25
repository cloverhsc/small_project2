/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GlycemiaComponent } from './glycemia.component';

describe('GlycemiaComponent', () => {
  let component: GlycemiaComponent;
  let fixture: ComponentFixture<GlycemiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlycemiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlycemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

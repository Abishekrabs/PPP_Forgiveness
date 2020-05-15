/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForgivenessComponent } from './forgiveness.component';

describe('ForgivenessComponent', () => {
  let component: ForgivenessComponent;
  let fixture: ComponentFixture<ForgivenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgivenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

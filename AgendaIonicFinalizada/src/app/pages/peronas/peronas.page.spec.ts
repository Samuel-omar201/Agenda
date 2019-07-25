import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronasPage } from './peronas.page';

describe('PeronasPage', () => {
  let component: PeronasPage;
  let fixture: ComponentFixture<PeronasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeronasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeronasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

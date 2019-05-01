import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLibComponent } from './field-lib.component';

describe('FieldLibComponent', () => {
  let component: FieldLibComponent;
  let fixture: ComponentFixture<FieldLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

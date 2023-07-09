import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList4Component } from './employee-list4.component';

describe('EmployeeList4Component', () => {
  let component: EmployeeList4Component;
  let fixture: ComponentFixture<EmployeeList4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeList4Component]
    });
    fixture = TestBed.createComponent(EmployeeList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

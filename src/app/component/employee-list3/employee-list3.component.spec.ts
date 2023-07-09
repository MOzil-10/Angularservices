import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList3Component } from './employee-list3.component';

describe('EmployeeList3Component', () => {
  let component: EmployeeList3Component;
  let fixture: ComponentFixture<EmployeeList3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeList3Component]
    });
    fixture = TestBed.createComponent(EmployeeList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

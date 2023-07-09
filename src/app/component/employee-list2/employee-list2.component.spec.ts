import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList2Component } from './employee-list2.component';

describe('EmployeeList2Component', () => {
  let component: EmployeeList2Component;
  let fixture: ComponentFixture<EmployeeList2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeList2Component]
    });
    fixture = TestBed.createComponent(EmployeeList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

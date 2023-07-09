import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList5Component } from './employee-list5.component';

describe('EmployeeList5Component', () => {
  let component: EmployeeList5Component;
  let fixture: ComponentFixture<EmployeeList5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeList5Component]
    });
    fixture = TestBed.createComponent(EmployeeList5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

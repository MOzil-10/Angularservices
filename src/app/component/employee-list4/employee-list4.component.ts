import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list4',
  templateUrl: './employee-list4.component.html',
  styleUrls: ['./employee-list4.component.css']
})
export class EmployeeList4Component implements OnInit{

public employees:any=[];

  constructor(private employee:EmployeeService){}

  ngOnInit(): void {
    
    this.employees = this.employee.getEmployee();

  }

}

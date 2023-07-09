import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list3',
  templateUrl: './employee-list3.component.html',
  styleUrls: ['./employee-list3.component.css']
})
export class EmployeeList3Component implements OnInit {

public employees : any=[];

constructor(private employee:EmployeeService){}

  ngOnInit(): void {
   
    this.employees = this.employee.getEmployee();

  }

}

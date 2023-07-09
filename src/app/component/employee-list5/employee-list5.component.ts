import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list5',
  templateUrl: './employee-list5.component.html',
  styleUrls: ['./employee-list5.component.css']
})
export class EmployeeList5Component implements OnInit {

  public employees:any=[];


  constructor(private employee: EmployeeService ){}

  ngOnInit(): void {
   
    this.employees = this.employee.getEmployee();

  }

}

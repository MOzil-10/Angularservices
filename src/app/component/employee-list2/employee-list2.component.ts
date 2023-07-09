import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list2',
  templateUrl: './employee-list2.component.html',
  styleUrls: ['./employee-list2.component.css']
})
export class EmployeeList2Component implements OnInit {

  public employees : any=[]
  constructor(private employee:EmployeeService){}


  ngOnInit(): void {
   this.employees = this.employee.getEmployee();
  }

}

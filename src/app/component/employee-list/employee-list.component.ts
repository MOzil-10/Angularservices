import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  public employees : any= [];

  constructor( private employee: EmployeeService){}

  ngOnInit(): void {
   
   this.employees = this.employee.getEmployee();
  }

}

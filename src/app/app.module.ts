import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { EmployeeList2Component } from './component/employee-list2/employee-list2.component';
import { EmployeeList3Component } from './component/employee-list3/employee-list3.component';
import { EmployeeList4Component } from './component/employee-list4/employee-list4.component';
import { EmployeeList5Component } from './component/employee-list5/employee-list5.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeList2Component,
    EmployeeList3Component,
    EmployeeList4Component,
    EmployeeList5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

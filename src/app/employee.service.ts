import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

getEmployee(){
  return [
    {"id":1, "name":"Ozil", "age":"28"},
    {"id":2, "name":"Mesut", "age":"25"},
    {"id":3, "name":"Moe", "age":"23"},
    {"id":4, "name":"Salah", "age":"38"},
    {"id":5, "name":"Lebo", "age":"27"},
    {"id":6, "name":"Thili", "age":"24"},
  ];
}

}

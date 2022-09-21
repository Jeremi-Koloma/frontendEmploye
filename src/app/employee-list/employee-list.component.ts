import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'; // Employee Class

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[]; // Employee Class;

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
      "id" : 1,
      "firstName" : "Jeremi",
      "lastName" : "KOLOMA",
      "emailId" : "kolomajeremi60@gmail.com"
    },
    {
      "id" : 2,
      "firstName" : "Ali",
      "lastName" : "KONTE",
      "emailId" : "konteali@gmail.com"
    },
  ]
  }

}

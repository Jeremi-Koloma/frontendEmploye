import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'; // Employee Class
import { EmployeeService } from '../employee.service'; // importation du service pour l'injection dans le constructeur;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[]; // Employee Class;

  //Injectons notre service dans le constructeur;
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
       this.employees = data;
    })
  }


}

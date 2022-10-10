import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importation de router pour les liens 
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
  constructor(private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
       this.employees = data;
    })
  }

  // le lien de naviguer vers la page upate depuis le bouttons-update in the form
  updateEmployee(id : number){
    this.router.navigate(['update-employee', id]);
  }

  // Delete methode btn
  deleEmployee(id : number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees(); 
    })
  }

  // Détails btn
  employeeDetails(id : number){
    this.router.navigate(['employee-datails', id]);
  }


}

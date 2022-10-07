import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'; // importation du service employee

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee();

  // Injectons le employeeService dans le constructeur;
  constructor( private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
  }

  // La méthode qui va enregistrer nos données
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( date =>{
      console.log(date);
      this.goToEmployeeList(); // appeler la fonction de redirection;
    },
    error => console.log(error)
    );
  }

  // Une méthode de redirection quand il soumette le formulaire;
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  // fonction pour la soumission du formulaire
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id !: number
  employee !: Employee

  // Injectons ActivatesRoute pour getter id qui est dans l'url en cliquant sur un employee;
  constructor( private route : ActivatedRoute, private employeeServe : EmployeeService) { }

  ngOnInit(): void { // gettons id de l'url
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeServe.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    });
  }

}

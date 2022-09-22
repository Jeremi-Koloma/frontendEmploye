import { Injectable } from '@angular/core';
// On importe HttpClient pour pouvoir l'injecter au niveau de constructeur;
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Injectons le HttClient dans le constructeur;

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) { }

  getEmployeeList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

}

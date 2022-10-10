import { Injectable } from '@angular/core';
// On importe HttpClient depuis le module pour pouvoir l'injecter au niveau de constructeur;
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Injectons le HttClient dans le constructeur;

  private baseUrl = "http://localhost:8080/api/v1/employees";

  private baseUrlCreate = "http://localhost:8080/api/v1/employees/create";

  private baseUrlById = "http://localhost:8080/api/v1/employees";

  private baseUrlUpdate = "http://localhost:8080/api/v1/employees/update";

  private baseUrlDelete = "http://localhost:8080/api/v1/employees/delete";

  constructor(private httpClient : HttpClient) { }

  //  La méthode qui nous permet d'afficher la liste des employés
  getEmployeeList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  // La méthode qui nous permet de d'ajouter un employé
  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.baseUrlCreate}`, employee);
  }

  // La méthode qui nous retourne un employer avec tous ses coordonnées
  getEmployeeById(id : number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrlById}/${id}`);
  }

  // La méthode qui nous permets de modifier un employé
  updateEmployee(id : number, employee : Employee) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrlUpdate}/${id}`, employee);
  }

  // La méthode qui va supprimer 
  deleteEmployee(id : number) : Observable<Object>{
     return this.httpClient.delete(`${this.baseUrlDelete}/${id}`);
  }

}

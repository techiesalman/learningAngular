import { Injectable } from '@angular/core';
import { Employee } from '../dtos/employee';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {Id: 1, Name: 'Salman', Email: 'salman@gmail.com', IsActive: true},
    {Id: 2, Name: 'Tanisha', Email: 'tanisha@gmail.com', IsActive: true},
    {Id: 3, Name: 'Vinod', Email: 'vinod@gmail.com', IsActive: false},
    {Id: 4, Name: 'Ram', Email: 'ram@gmail.com', IsActive: true},
    {Id: 5, Name: 'Nikesh', Email: 'nikesh@gmail.com', IsActive: false}
  ]

  constructor(
    private httpClient: HttpClient
  ) {

  }

  /**
   *
   * @returns lis of employees
   */
  getEmployees() {
    return this.employees;
  }

  getEmployeeDetailsById(id: number) {
    return this.employees.find(x=> x.Id == id);
  }

  getOffers() {
    return this.httpClient.get(`${environment.baseUrl}articles`);
  }

}

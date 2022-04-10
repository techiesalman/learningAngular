import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/dtos/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title = 'learningAngular';

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService
  ) {

  }

  ngOnInit(): void {
     this.employees = this.employeeService.getEmployees();
  }

  emailClicked(email: string) {
    console.log(email)
  }

}

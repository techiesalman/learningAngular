import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { Employee } from 'src/app/core/dtos/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeDetail: Employee = new Employee();
  // employeeName = 'Tanvi';

  constructor(
    private employeeService: EmployeeService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.employeeDetail = this.employeeService.getEmployeeDetailsById(+this.router.snapshot.paramMap.get('id'));
    this.employeeService.getOffers()
      .subscribe( response => {
        console.log(response);
      })
  }

  childMethodInvoked(data: string) {
    console.table(data);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-department',
  templateUrl: './employee-department.component.html',
  styleUrls: ['./employee-department.component.css']
})
export class EmployeeDepartmentComponent implements OnInit {

  @Input() employeeName: string;
  @Output() childInvoked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.childInvoked.emit(this.employeeName);
  }

}

import { Component } from '@angular/core';
import { Employee } from './core/dtos/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'learningAngular';

  employees: Employee[] = [
    {Name: 'Salman', Email: 'salman@gmail.com', IsActive: true},
    {Name: 'Tanisha', Email: 'tanisha@gmail.com', IsActive: true},
    {Name: 'Vinod', Email: 'vinod@gmail.com', IsActive: false},
    {Name: 'Ram', Email: 'ram@gmail.com', IsActive: true},
    {Name: 'Nikesh', Email: 'nikesh@gmail.com', IsActive: false},
  ]

  emailClicked(email: string) {
    console.log(email)
  }
}

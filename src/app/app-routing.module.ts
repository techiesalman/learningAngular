import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:"", component: PostComponent},
  // {path:"", component: EmployeeComponent},
  {path:"employee-detail/:id", component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

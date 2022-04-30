import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from 'src/app/core/dtos/post';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Posts = new Posts();
  form: FormGroup;
  submitted = false;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.post.title = "Dummy Title";
    this.post.body = "Dummy Body";
    this.post.userId = 115;

    // this.employeeService.postJsonPlaceHolderCall(this.post)
    //   .subscribe(response => {
    //     console.log(response);
    //   })

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    this.employeeService.postJsonPlaceHolderCall(this.form.value)
      .subscribe(response => {
        console.log(response);
        this.submitted = false;
        this.form.reset();
      })
  }

}

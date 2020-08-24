import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "C:/Users/siriv/Desktop/angular9Crud/src/app/employee.service";
import { Employee } from "C:/Users/siriv/Desktop/angular9Crud/src/app/employee";
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();
  submitted = false;

  constructor( private employeeService : EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void 
  {
    this.submitted = false;
    this.employee = new Employee();
  }

  save()
  {
    this.employeeService.createEmployee(this.employee)
    .subscribe(
      data=>
      {
        console.log(data)
      },
        error => console.log(error)
    );
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit()
  {
    this.submitted = true;
    this.save();
  }

  gotoList()
  {
    this.router.navigate(['/employees']);
  }


}

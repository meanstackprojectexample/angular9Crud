import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "C:/Users/siriv/Desktop/angular9Crud/src/app/employee.service";
import { Employee } from "C:/Users/siriv/Desktop/angular9Crud/src/app/employee";
import { Router, ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id : string;
  employee : Employee;
  constructor( private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
    .subscribe( data =>
      {
        console.log(data,"update");
        this.employee= data['msg'];
      },
        error => console.log(error)
      );
  }

  updateEmployee()
  {
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(
      data => 
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
    this.updateEmployee();
  }
  gotoList()
  {
    this.router.navigate(['/employees']);
  }
}

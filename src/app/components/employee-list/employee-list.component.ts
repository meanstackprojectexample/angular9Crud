import { Component, OnInit } from '@angular/core';
import {EmployeeDetailsComponent} from '../employee-details/employee-details.component';
import {Observable} from 'rxjs';
import { EmployeeService } from "C:/Users/siriv/Desktop/angular9Crud/src/app/employee.service";
import { Employee } from "C:/Users/siriv/Desktop/angular9Crud/src/app/employee";
import { Router, ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Observable<Employee[]>;
  constructor( private route: ActivatedRoute,private employeeService : EmployeeService , private router : Router) { }
  id : string;
  employee : Employee;
  ngOnInit(): void {
    this.reloadData();
    //  this.upDateData();
  }

  reloadData()
  {
       this.employeeService.getEmployeesList()
      .subscribe( data =>
        {
            // console.log(data);
            this.employees = data['msg'];
            console.log(this.employees,"employees")
        });

  }

  deleteEmployee(id:string)
  {
    this.employeeService.deleteEmployee(id)
    .subscribe(
      data =>
      {
        console.log(data);
        this.reloadData();
      },
      error  => console.log(error)
    );
  }

  employeeDetails(id : string)
  {
    this.router.navigate(['details',id]);
  }

// Upadte

upDateData(id : string)
{
  //this.employee = new Employee();
  // this.id = this.route.snapshot.params['id'];

  this.employeeService.getEmployee(id)
  .subscribe( data =>
    {
      console.log(data,"updateemployee");
      this.employee= data['msg'];
    },
      error => console.log(error)
    );
    console.log(id,'id')
    this.router.navigate([`/update/${id}`])
}
}

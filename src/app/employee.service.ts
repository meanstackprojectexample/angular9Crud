import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Employee } from "C:/Users/siriv/Desktop/angular9Crud/src/app/employee";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient) { }

  getEmployee(id: string) : Observable<any>
  {
    return this.http.get('http://localhost:8000/read/'+id,
    {
      observe : 'body',
      headers: new HttpHeaders().append('content-type','application/json')

    });
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post('http://localhost:8000/create', employee,
    {
      observe : 'body',
      headers: new HttpHeaders().append('content-type','application/json')
    });
  }

  updateEmployee(id: string, value: any): Observable<Object> {
    return this.http.put('http://localhost:8000/update/'+id, value,
    {
      observe : 'body',
      headers: new HttpHeaders().append('content-type','application/json')
    });
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete('http://localhost:8000/delete/'+id, { 
      responseType: 'text',
      observe : 'body',
      headers: new HttpHeaders().append('content-type','application/json') });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get('http://localhost:8000/read',
  {
    observe : 'body',
      headers: new HttpHeaders().append('content-type','application/json')
  });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = 'http://localhost:4200/employees';  

  private token = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2OTEyNTgyMTQsImlhdCI6MTY5MTIyOTQxNCwic2NvcGUiOiJhcHAifQ.CqoBddOo1Eda9_zbpkZS31e0mO0EMY2gxEIBTaghlKmBx6az-OjZrV-88bmwh6vL3FyBzpz7CLjl3J3FHR55CSmhGe0MQ5-zhjBD2XakHWenGoDhmdwYmPo4vgRiFeHSDEcBKt0M1vqlGmiH-50ByTCeC0rRW73Efe3idzPC5kgRhzBfjzIjZBrDU_-k9BvjFTPRc6pzTEHXdElU4WpzzD-59tCMIy5BKUxCh2SOGrnJ1vXJQVAsRCFCDHwOR6H_KOJfbOFB3oSNxjf3crWvCE2jvHhYABdSTPaOSz0OWQO22uGcwWFT4kFG1QayxgFUmFDX9qYY4Cbx6FTLEA5VeQ';

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl, this.httpOptions);
  }

  save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}

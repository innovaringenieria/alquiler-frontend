import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.model';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private apiUrl = 'http://localhost:8080/api/carros';  

  private token = 'your-token';

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl, this.httpOptions);
  }

  save(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}

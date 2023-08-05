import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../interfaces/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private apiUrl = 'http://your-api-url.com/api/trips';  

  private token = 'your-token';

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };

  constructor(private http: HttpClient) { }

  save(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip, this.httpOptions);
  }

}

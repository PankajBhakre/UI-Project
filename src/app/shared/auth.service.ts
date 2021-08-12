import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { City, Country, State } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public apiUrl = "http://localhost:63126/Api/Register";
  constructor(private http: HttpClient) { }

  getAllCountry(): Observable<Country[]> {
 return this.http.get<Country[]>(this.apiUrl + '/AllCountryDetails');
  }

  getAllState(countryId: string): Observable<State[]>{
return this.http.get<State[]>(this.apiUrl + '/AllStateDetails/' + countryId);
  }

  getAllCity(stateId: string): Observable<City[]>{
return this.http.get<City[]>(this.apiUrl + '/AllCityDetails/' + stateId);
  }
}

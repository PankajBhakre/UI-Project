import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { City, Country, Login, Register, State } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public apiUrl = "http://localhost:63126/Api/Register";
  constructor(private http: HttpClient) { }

  //Following methods consumed in register-user component 

  getAllCountry(): Observable<Country[]> {
 return this.http.get<Country[]>(this.apiUrl + '/AllCountryDetails');
  }

  getAllState(countryId: string): Observable<State[]>{
return this.http.get<State[]>(this.apiUrl + '/AllStateDetails/' + countryId);
  }

  getAllCity(stateId: string): Observable<City[]>{
return this.http.get<City[]>(this.apiUrl + '/AllCityDetails/' + stateId);
  }

  CheckExistUser(userName:string): Observable<boolean> {  
    return this.http.get<boolean>(this.apiUrl + '/CheckUserName?userName=' + userName);  
  } 

  UploadImage(formData: FormData) {  
    debugger;
    let headers = new HttpHeaders();  
    headers.append('Content-Type', 'multipart/form-data');  
    headers.append('Accept', 'application/json');  
    const httpOptions = { headers: headers };  
    return this.http.post(this.apiUrl+ '/UploadImage', formData, httpOptions)  
  } 

  createData(regData: Register): Observable<string> { 
    debugger;
      const parsedUrl = new URL(window.location.href);
      regData.Url=parsedUrl.origin + "/" + "VeryFiyAccount/";
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.post<string>(this.apiUrl + '/InsertRegDetails/',  
      regData, httpOptions);  
    } 

     //Following methods consumed in verify_account component 

    activateAccount(actvationCode:string): Observable<string> {  
      debugger;
      return this.http.get<string>(this.apiUrl + '/VeryFiyAccount/' + actvationCode);  
    } 

    //Following methods consumed in login component 

    public validateLoginUser(loginmodel: Login){
      let headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post<any>(this.apiUrl + '/login/', loginmodel ,{headers : headers})
      .pipe(tap(data =>{

        if(data == 'Admin'){
          localStorage.setItem('AdminUser',loginmodel.UserName);
        }
        else if (data == "Recruiter") {
          localStorage.setItem('RecruiterUser', loginmodel.UserName);
      }
      else if (data == "Seeker") {
        localStorage.setItem('SeekerUser', loginmodel.UserName);
    }
      return data;
      }),
      catchError(this.handleError)
      )
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
  };
}

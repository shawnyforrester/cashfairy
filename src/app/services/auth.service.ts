import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

/**
 * This class handles the login and registration requests to the server
 */
const AUTH_API = "http://localhost:9000";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  /**
   * 
   * @param user Handles the login POST request to the server
   * @returns 
   */
  login(user: Customer): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.http.post(AUTH_API + '/login', {user}, {headers: header}
    );
  }

  /**
   * 
   * @param user Handles the registration POST request to the server
   * @returns 
   */
  register(user: Customer): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.http.post( AUTH_API + '/registration',{user}, {headers: header}
    );
  }

  logout(): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.http.post(AUTH_API + 'logout', { }, {headers: header});
  }
}

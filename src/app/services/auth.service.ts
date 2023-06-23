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
  login(username: string, password: string): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    // header.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.http.post(AUTH_API + '/login', {username, password}, {headers: header}
    );
  }

  /**
   * 
   * @param user Handles the registration POST request to the server
   * @returns 
   */
  register(first_name: string, last_name: string, username: string, 
    password: string, city: string, email: string, telephone: string, role: string): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    // header.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.http.post( AUTH_API + '/registration',{
      first_name, last_name, username, password, city, email, telephone, role
    }, {headers: header}
    );
  }

  logout(): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    // header.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return this.http.post(AUTH_API + 'logout', { }, {headers: header});
  }
}

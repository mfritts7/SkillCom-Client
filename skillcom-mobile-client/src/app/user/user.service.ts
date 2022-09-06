import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from './user';
import { Contract } from '../contract/contract';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userUrl: string = `${environment.apiUrl}/Users`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    let url = `${this.userUrl}/1`;
    return this.http.get<User>(url, this.httpOptions);
  }
  
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  numberOfPlans(contract: Contract[], planId: number): number {
    var count = 0
      for (let i=0; i<contract.length; i++){
        if (contract[i].planId == planId){
          count = count + 1
        }
      }
    return count
  }

}

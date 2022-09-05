import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Contract } from '../contract/contract'
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  newPlan!:Plan
  private planUrl: string = `${environment.apiUrl}/Plans`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>(this.planUrl, this.httpOptions);
  }

  hasPlanType(pId: number, contracts: Contract[]): boolean {
    let value = false;
    contracts.forEach(function (c) {
      if (c.planId === pId) {
        value = true;
      }
    });
    return value;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from './device';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  newDevice!: Device;
  private deviceUrl: string = `${environment.apiUrl}/Devices`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl,this.httpOptions)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YerkeeService {
  baseURL = 'https://cors-anywhere.herokuapp.com/http://www.yerkee.com/';
  endPoint = '';
  
  constructor(private http: HttpClient) { }

  getFortune() {
    this.endPoint = 'api/fortune';
    return this.http.get(this.baseURL + this.endPoint);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  apiKey = '623b6b76f31142bf82a35417192808';
  baseURL = 'https://api.apixu.com/';
  endPoint = '';
  constructor(private http: HttpClient) { }

  getCurrentWeather(keyword: string) {
    this.endPoint = 'v1/current.json';
    return this.http.get(this.baseURL + this.endPoint + '?key=' + this.apiKey + '&q=' + keyword);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpstackService {
  apiKey = '8d35e611121c0c29df98111721892a58';
  baseURL = 'http://api.ipstack.com/';
  endPoint = '';
  requestURL = '';

  constructor(private http: HttpClient) { }

  getIPInfo(ipAddress: string) {
    this.endPoint = ipAddress;
    return this.http.get(this.createEndPoint(this.baseURL, this.endPoint, this.apiKey));
  }

  getSelfInfo() {
    this.endPoint = 'check';
    return this.http.get(this.createEndPoint(this.baseURL, this.endPoint, this.apiKey));
  }

  createEndPoint(baseURL: string, endPoint: string, apiKey: string) {
    return baseURL + endPoint + '?access_key=' + apiKey;
  }
}

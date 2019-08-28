import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatfactService {
  baseURL = 'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/'
  endPoint = '';

  constructor(private http: HttpClient) { }

  getCatFact() {
    this.endPoint = 'facts/random';
    return this.http.get(this.createEndPoint(this.baseURL, this.endPoint));
  }

  createEndPoint(baseURL: string, endPoint: string) {
    return baseURL + endPoint;
  }

}

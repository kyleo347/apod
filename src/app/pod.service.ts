import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodService {
POD_URL = 'https://api.nasa.gov/planetary/apod';

  constructor(private httpClient: HttpClient) { }

  getPod(date: string ) {
    const params = new HttpParams();
    return this.httpClient.get(this.POD_URL, { params: params.set('api_key', 'DEMO_KEY').set('date', date)});
  }

}

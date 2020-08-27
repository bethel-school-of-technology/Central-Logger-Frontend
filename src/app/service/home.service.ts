import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  URL: string = 'http://localhost:3000/';

  getData(): Observable<any>{
    return this.http.get<any>(this.URL)
  }
  constructor(private http: HttpClient) { }


  test(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

}

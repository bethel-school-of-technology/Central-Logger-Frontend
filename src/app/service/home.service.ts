import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  URL: string = 'localhost:3000/'

  constructor(private http: HttpClient) { }




}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  URL: string = 'localhost:3000/home'

  constructor() { }
}

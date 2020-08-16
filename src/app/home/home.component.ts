import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Log } from '../models/log';
import { HomeService } from '../service/home.service';


let url = 'http://localhost:3000/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Logs: Log[];
  @Input() dataPath: string;


  constructor(private http: HttpClient, private homeservice: HomeService) { }

  ngOnInit(): void {
    // this.http.get<Log[]>(this.dataPath).subscribe(logs => {
      // this.Logs = logs;
    // });
    this.homeservice.test().subscribe(response => {
      console.log(response);
    });
  }

}

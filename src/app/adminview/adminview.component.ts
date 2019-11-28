import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  user:User[];

  constructor(private svc: HttpClientService, private route: Router) { }

  ngOnInit() {
    this.svc.getUser().subscribe(response => {
      this.user=response;

      

    });

  }
  

}

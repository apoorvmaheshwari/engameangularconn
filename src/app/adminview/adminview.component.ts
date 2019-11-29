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
    console.log(sessionStorage.getItem("usernameadmin"))
    if(sessionStorage.getItem("usernameadmin")==null){
      this.route.navigate(['/adminlog'])

    }
    this.svc.getUser().subscribe(response => {
      this.user=response;

      

    });

  }
  

}

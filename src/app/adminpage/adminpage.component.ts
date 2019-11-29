import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private svc: HttpClientService,  private route: Router) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("usernameadmin"))
    if(sessionStorage.getItem("usernameadmin")==null){
      this.route.navigate(['/adminlog'])

    }
  }

}

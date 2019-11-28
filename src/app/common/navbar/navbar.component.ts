import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private svc: HttpClientService, private route: Router) { }

  ngOnInit() {
    

  }
  logout(){
    console.log("session cleared")
    sessionStorage.clear();
    this.route.navigate([''])


  }

}

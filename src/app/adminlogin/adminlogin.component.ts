import { Component, OnInit } from '@angular/core';
import { Admin, HttpClientService } from '../http-client.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username: string = "";
  pass: string = "";
  Login: Admin;
  constructor(private svc: HttpClientService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
  }
  login() {
    this.Login = new Admin( this.username,this.pass)

    this.svc.getAdminemailPass(this.username, this.pass).subscribe(response => {
      console.log('loggin response in login');

      console.log(response);

      this.resp(response)

    });


  }
  resp(response: string) {
    if (response) {
      sessionStorage.setItem("usernameadmin", this.username)
      console.log(sessionStorage.getItem("usernameadmin"))
      this.route.navigate(['/adminpage'])
    }else {
      alert('Enter correct Username Password!! :-(\n\n');
      this.route.navigate(['/adminlog'])
    }
  }


}

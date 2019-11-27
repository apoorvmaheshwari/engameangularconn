import { Component, OnInit } from '@angular/core';
import { Ads, User, HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-loginreguser',
  templateUrl: './loginreguser.component.html',
  styleUrls: ['./loginreguser.component.css']
})
export class LoginreguserComponent implements OnInit {
  name: string="";
  password: string="";
  email: string="";
  phone: number=0;
  
  ad:Ads;
  user:User;
  constructor(private svc: HttpClientService) { }

  ngOnInit() {
  }

  createUser(){
    this.user= new User(this.name,this.password,this.email,this.phone,[])
    console.log(this.user);
    this.svc.createUser(this.user).subscribe(data =>{console.log("Success")});
  }

}

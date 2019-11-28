import { Component, OnInit } from '@angular/core';
import { User, HttpClientService, Ads } from '../http-client.service';

@Component({
  selector: 'app-userads',
  templateUrl: './userads.component.html',
  styleUrls: ['./userads.component.css']
})
export class UseradsComponent implements OnInit {
user:User
username:string
public name: string
public password: string
public email: string
public phone: number
public ad: Ads[]

  constructor(private httpClient:HttpClientService) { }

  ngOnInit() {
    this.username=sessionStorage.getItem("username")
    console.log(this.username)
    this.httpClient.getUserbyEmail(this.username).subscribe(response =>{
      console.log(response);
      this.user=response;
      this.name=this.user.name
      this.email=this.user.email
      this.phone=this.user.phone
      this.ad=this.user.ad
      console.log(this.ad)
      console.log(this.user)

    });


      
    

  }

}

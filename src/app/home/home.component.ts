import { Component, OnInit } from '@angular/core';

import { HttpClientService, Ads } from '../http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ads:Ads[]
  category:string
  constructor(private httpClient:HttpClientService) { }

  ngOnInit() {
    
  }

  submit(){
    this.httpClient.getAdsCat(this.category).subscribe(response=>{this.ads=response})
    console.log(this.ads)
  }
  

}

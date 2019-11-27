import { Component, OnInit } from '@angular/core';

import { HttpClientService, Ads } from '../http-client.service';

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit {
category:string="";
postTitle:string="";
Code:number=0;
descrip:string="";
email:string="";
phoneNo:string="";
ad: Ads





  constructor(private svc: HttpClientService) { }

  ngOnInit() {
    


  }
  postAds(){
    this.ad =  new Ads("Housing",this.postTitle,this.Code,this.descrip,this.email,this.phoneNo)
    console.log(this.ad);
    this.svc.postAds(this.ad).subscribe(data => {console.log("Success")});
  }

}

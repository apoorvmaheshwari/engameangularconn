import { Component, OnInit } from '@angular/core';

import { HttpClientService, Ads, User } from '../http-client.service';

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
user:User[];
counter:number=1;
id:string="";





  constructor(private svc: HttpClientService) { }

  ngOnInit() {
    


  }
  postAds(){
    sessionStorage.getItem("username");
    this.id=sessionStorage.getItem("username")+this.counter.toString();
    this.svc.letsidUser(sessionStorage.getItem("username"),this.id).subscribe(data => {
      this.resp(data);
    });
  }


  //   this.ad =  new Ads(this.id,this.category,this.postTitle,this.Code,this.descrip,this.email,this.phoneNo)
  //   console.log(this.ad);

  //   // this.svc.postAds(this.ad).subscribe(data => {console.log("Success")});
  //   sessionStorage.getItem("username");
  //   console.log(sessionStorage.getItem("username"))
    
  //   this.svc.userad(sessionStorage.getItem("username"),this.ad).subscribe(data => console.log("success 2") );
    
  // }
  resp(data){
    if(data==1){
      this.counter++;
      this.postAds();
    }
    else{
      this.ad =  new Ads(this.id,this.category,this.postTitle,this.Code,this.descrip,this.email,this.phoneNo)
      console.log(this.ad);
      sessionStorage.getItem("username");
      console.log(sessionStorage.getItem("username"));
      this.svc.userad(sessionStorage.getItem("username"),this.ad).subscribe(data => console.log("success 2") );
    
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { Ads, HttpClientService } from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adview',
  templateUrl: './adview.component.html',
  styleUrls: ['./adview.component.css']
})
export class AdviewComponent implements OnInit {
  ads:Ads[]
  typeAds:Ads[]
  category:string
  adds:Ads 
  id:string
     postTitle: string
     postCode: number
     descrip:string
     email:string
     phoneNo:string
  constructor(private httpClient:HttpClientService, private route:Router) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("username"))
    if(sessionStorage.getItem("username")==null){
      this.route.navigate(['/loginreguser'])

    }
    console.log('pritning local data...');
    
    this.ads=JSON.parse(localStorage.getItem("data"))
    console.log(this.ads);
    
    this.category=JSON.parse(localStorage.getItem("category"))
  }

  addredirect(title:string){
    console.log(title)
    this.ads.forEach(item=>{
      if(title==item.postTitle){
        this.id=item.id
        this.postTitle=item.postTitle
        this.postCode=item.postCode
        this.descrip=item.descrip
        this.email=item.email
        this.phoneNo=item.phoneNo
        this.adds=new Ads(this.id,this.category,this.postTitle,this.postCode,this.descrip,this.email,this.phoneNo)
        console.log(this.adds);
        
        localStorage.setItem("dataAccess", JSON.stringify(this.adds));
        console.log(localStorage.getItem("dataAccess"));
        this.route.navigate(['/viewads']);
      }
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClientService, Ads } from '../http-client.service';

@Component({
  selector: 'app-viewads',
  templateUrl: './viewads.component.html',
  styleUrls: ['./viewads.component.css']
})
export class ViewadsComponent implements OnInit {
  ads:Ads[]
  typeAds:Ads[]
  category:string
  adds:Ads 
  constructor(private httpClient:HttpClientService) { }

  ngOnInit() {
    this.ads=JSON.parse(localStorage.getItem("dataAccess"))
    console.log(this.ads)
    // this.route.navigateByUrl("http://localhost:4200/viewads")



  }

}

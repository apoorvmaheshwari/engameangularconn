import { Component, OnInit } from '@angular/core';

import { HttpClientService, Ads } from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ads: Ads[] = [];
  typeAds: Ads[] = [];
  searchCategory: string = "";
  searchProduct: string = "";
  constructor(private httpClient: HttpClientService, private route: Router) { }

  ngOnInit() {

  }

  submit() {
    if (this.searchCategory !== "") {
      this.httpClient.getAdsCat(this.searchCategory).subscribe
        (response => {
          this.ads = response;
          localStorage.setItem("data", JSON.stringify(this.ads));
          localStorage.setItem("category", JSON.stringify(this.searchCategory))
          this.route.navigate(['/add'])
        })
    }


  }
  redirect() {
    console.log("in redirect")
    this.route.navigateByUrl("http://localhost:4200/add")
  }


}

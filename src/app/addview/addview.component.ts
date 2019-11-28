import { Component, OnInit } from '@angular/core';
import { HttpClientService, Ads } from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addview',
  templateUrl: './addview.component.html',
  styleUrls: ['./addview.component.css']
})
export class AddviewComponent implements OnInit {
  ads: Ads[];
  returnad: Ads
  category: string
  adds: Ads
  id: string
  postTitle: string
  postCode: number
  descrip: string
  email: string
  phoneNo: string
  constructor(private svc: HttpClientService, private route: Router) { }

  ngOnInit() {
    this.svc.getAds().subscribe(response => {
      this.ads = response;



    });
  }
  adview(id: string) {
    
    
    this.svc.adviewid(id).subscribe(data => {

      console.log('adview');
      console.log(id);
      console.log(data);
      console.log('adview');
      
      this.id = data.id
      this.postTitle = data.postTitle
      this.postCode = data.postCode
      this.descrip = data.descrip
      this.email = data.email
      this.phoneNo = data.phoneNo
      this.adds = new Ads(this.id, this.category, this.postTitle, this.postCode, this.descrip, this.email, this.phoneNo)
      console.log(this.adds);

      localStorage.setItem("dataAccess", JSON.stringify(this.adds));
      console.log(localStorage.getItem("dataAccess"));
      this.route.navigate(['/viewads']);

    });

  }
  addelete(id:string){
    this.svc.deleteadUser(id).subscribe(data =>{
      this.svc.deleteAds(id).subscribe(data =>{console.log("Successful ad deletion")
      });
    })
      
    
  }


}

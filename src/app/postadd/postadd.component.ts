import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { HttpClientService, Ads, User } from '../http-client.service';
import { Router } from '@angular/router';

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
postaddForm: FormGroup;
submitted = false;






  constructor(private svc: HttpClientService,private route: Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.postaddForm = this.formBuilder.group({
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      category: ['', Validators.required],
      postTitle: ['', Validators.required],
      Code: ['', Validators.required],
    });

    console.log(sessionStorage.getItem("username"))
    if(sessionStorage.getItem("username")==null){
      this.route.navigate(['/loginreguser'])

    }
    


  }
  get f() { return this.postaddForm.controls; }
 

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.postaddForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.postaddForm.value, null, 4));
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

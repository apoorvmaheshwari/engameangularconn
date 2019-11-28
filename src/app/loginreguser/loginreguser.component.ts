import { Component, OnInit, NgModule } from '@angular/core';
import { Ads, User, HttpClientService } from '../http-client.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginreguser',
  templateUrl: './loginreguser.component.html',
  styleUrls: ['./loginreguser.component.css']
})
export class LoginreguserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  name: string = "";
  password: string = "";
  email: string = "";
  phone: number = 0;

  ad: Ads;
  user: User;
  Login: User;
  Log: User;
  errorMessage:string;
  loginForm:FormGroup;

  username: string = "";
  pass: string = "";
  // title = 'Angular Form Validation Tutorial';
  // angForm: FormGroup;
  constructor(private svc: HttpClientService, private formBuilder: FormBuilder, private route: Router) {
    // this.getUser();

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.pattern('^[\\w-\\+]+(\\.[\\w]+)*@dxc.com')],
      password: ['', Validators.required],
     

    });
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.pattern('^[\\w-\\+]+(\\.[\\w]+)*@dxc.com')],
      password: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],

    });
  }
  get f() { return this.registerForm.controls; }
  get l() { return this.registerForm.controls; }

  createUser() {
    this.user = new User(this.name, this.password, this.email, this.phone, [])
    console.log(this.user);
    this.svc.createUser(this.user).subscribe(data => { console.log("Success") });
  }
  

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  login() {
    this.Login = new User("", this.pass, this.username, 0, []);

    this.svc.getEmailPass(this.username, this.pass).subscribe(response => {
      console.log('loggin response in login');

      console.log(response);

      this.resp(response)

    });


  }
  resp(response: string) {
    if (response) {
      sessionStorage.setItem("username", this.username)
      console.log(sessionStorage.getItem("username"))
      this.route.navigate(['/home'])
    }else {
      alert('Enter correct Username Password!! :-(\n\n');
      this.route.navigate(['/loginreguser'])
    }
  }

}
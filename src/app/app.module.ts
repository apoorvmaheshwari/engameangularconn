import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdviewComponent } from './adview/adview.component';
import { UseradsComponent } from './userads/userads.component';
import { PostaddComponent } from './postadd/postadd.component';
import { LoginreguserComponent } from './loginreguser/loginreguser.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { InitselectComponent } from './initselect/initselect.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewadsComponent } from './viewads/viewads.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AdviewComponent,
    UseradsComponent,
    PostaddComponent,
    LoginreguserComponent,
    AdminloginComponent,
    InitselectComponent,
    AdminpageComponent,
    ViewadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

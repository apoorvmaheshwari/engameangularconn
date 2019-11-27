import { NgModule, ɵdefaultKeyValueDiffers } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdviewComponent} from './adview/adview.component';
import {UseradsComponent} from './userads/userads.component';
import {PostaddComponent} from './postadd/postadd.component';
import {InitselectComponent} from './initselect/initselect.component';
import {LoginreguserComponent} from './loginreguser/loginreguser.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewadsComponent } from './viewads/viewads.component';


const routes: Routes = [
  { path:'',pathMatch: 'full', component:InitselectComponent},
  { path: 'home', component: HomeComponent},
  { path: 'add', component: AdviewComponent },
  { path: 'user', component: UseradsComponent },
  { path: 'postadd', component: PostaddComponent },
  { path: 'loginsel', component: InitselectComponent },
  { path: 'loginreguser', component: LoginreguserComponent },
  { path: 'adminlog', component: AdminloginComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path:'viewads', component:ViewadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

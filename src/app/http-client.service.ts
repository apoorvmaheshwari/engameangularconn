import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export class Ads {
  public id: string;
  constructor(

    public category: string,
    public postTitle: string,
    public postCode: number,
    public descrip: string,
    public email: string,
    public phoneNo: string,

  ) { }
}

export class User {
  constructor(
    public name: string,
    public password: string,
    public email: string,
    public phone: number,
    public ad: Ads[]

  ) { }
}
export class User2{
  constructor(public email:string,
    public a: Ads){}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  u: User2;
  constructor(private httpClient: HttpClient) { }
  getAds() {
    console.log("testcall");
    return this.httpClient.get<Ads[]>('http://localhost:5000/ads');
  }
  postAds(ad: Ads) {
    console.log("postingAds");
    console.log(ad)
    return this.httpClient.post<Ads>('http://localhost:5000/adspost', ad);
  }
  getAdsCat(ad: string) {
    console.info('placing call for http://localhost:5000/ads/' + ad)
    return this.httpClient.get<Ads[]>("http://localhost:5000/ads/" + ad);
  }
  deleteAds(ad: string) {
    console.log("testcall");
    return this.httpClient.delete<Ads>('http://localhost:5000/ads/' + ad);
  }
  createUser(user: User) {
    console.log("test user creation");
    return this.httpClient.post<User>('http://localhost:5000/users', user);
  }
  getEmailPass(user: string, pass:string){
    console.log("test User list");
    return this.httpClient.get<string>('http://localhost:5000/users/'+user+'/'+pass);
  }
  userad(email:string, a:Ads){
    
    return this.httpClient.put<Ads>('http://localhost:5000/users/' + email,a);
  }
}

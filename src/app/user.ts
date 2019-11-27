import { Ads } from './http-client.service';



export class User {

    constructor(
      public name: string,
      public password: string,
      public email: string,
      public phone: number,
      
      public ad:Ads[]=[],
    ) {}
  }
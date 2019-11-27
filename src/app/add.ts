import { Time } from '@angular/common';

export class Add{
    id: number;
    user: string;
    add: string;
    time: Time;

    constructor(id:number,user:string, add:string,time:Time)
    {
        this.id=id;
        this.user=user;
        this.add=add;
        this.time=time;
    }

}
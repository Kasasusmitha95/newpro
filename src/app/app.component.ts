import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  mobiles=null;

  constructor(private ms:MobileService){

  }
  
//   [ {
//      name:"xyz",
//      price:20000,
//      ram:6,
//      storage:64

//   },
//   {
//     name:"abc",
//     price:10000,
//     ram:8,
//     storage:32

//  }]

  ngOnInit(): void {
    this.ms.fetchMobiles().subscribe(
     (data)=>{
        //this.mobiles = data;
      },
      (error) => {
        console.log("An error occurred:", error);
      }
    );
  }
}
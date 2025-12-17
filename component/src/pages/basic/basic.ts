import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({


//   template:`
//   <h3>This is Template Component</h3>

// <p>Name : {{name}}</p>
// <p>Marks : {{marks}} </p>

// <p (click)="showMessege()">Click me</p>
//   `,
  // styles:[
  //   `
  //   h3{
  //     color :red;
  //   }
  //   `
  // ]
    selector: 'app-basic',
  imports: [],
    templateUrl: './basic.html',
  styleUrl: './basic.scss',
standalone:true,
providers:[DatePipe]



})
export class Basic {

  constructor(private date:DatePipe){}

  name:string = "Omkar Mohite hello ";
  marks:number = 75;
  liveDate:any;

  showMessege(){
   alert("In Basic Component Button Clicked");
  }

  show(){
    this.liveDate = this.date.transform(new Date(),'dd-MM-yyy');
  }

}
function showMe(){
  confirm("Hello World");
}
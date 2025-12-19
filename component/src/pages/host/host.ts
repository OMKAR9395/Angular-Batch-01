import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  imports: [],
  templateUrl: './host.html',
  styleUrl: './host.scss',
  host:{
    '[class.active]':'true',
    '(click)':'clicked()'
  }
})
export class Host {

    clicked(){
      alert("Hello World");
    }
}

import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  //Example 1
  // studentName = 'Rahul';
  // changeName() {
  //   this.studentName = 'Omkar';
  // }

  //Example2
  color = 'lightblue';

  change() {
    this.color = this.color === 'lightblue' ? 'lightgreen' : 'lightblue';
  }
}

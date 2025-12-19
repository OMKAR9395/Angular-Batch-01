import { Component } from '@angular/core';
import { SeperateChildComponent } from '../seperateChild/seperateChild.component';

@Component({
  selector: 'app-SeperateParent',
  templateUrl: './SeperateParent.component.html',
  styleUrls: ['./SeperateParent.component.css'],
  imports: [SeperateChildComponent],
})
export class SeperateParentComponent {
  //Example 1
  // constructor() {}
  // msg: string = 'Account Created';
  // ngOnInit() {}
  // recieved(data: string) {
  //   this.msg = data;
  // }
  //Example 2
  result = 'Waiting...';

  recievedUser(data: string) {
    this.result = data;
    confirm('Hello From Parent');
  }
}

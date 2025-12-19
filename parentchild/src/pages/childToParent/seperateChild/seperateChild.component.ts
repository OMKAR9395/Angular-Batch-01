import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-seperateChild',
  templateUrl: './seperateChild.component.html',
  styleUrls: ['./seperateChild.component.css'],
  imports: [FormsModule],
})
export class SeperateChildComponent {
  //Example 10
  // @Output() clicked = new EventEmitter<string>();
  // send() {
  //   this.clicked.emit('Salary is Credited From Child');
  // }

  //Example 2

  username = '';

  @Output() omkar = new EventEmitter<string>();

  submitForm() {
    this.omkar.emit(this.username);
  }
}

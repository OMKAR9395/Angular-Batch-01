import { Component } from '@angular/core';
import { calcChild } from '../child/child';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Calcparent',
  imports: [calcChild, FormsModule, CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Calcparent {
  num1 = 0;
  num2 = 0;
  operator = '+';

  result?: number;

  error: string = '';
  history: string[] = [];

  //Child Result + history

  onResult(data: { result: number; history: string[] }) {
    this.result = data.result;
    this.history = data.history;
    this.error = '';
  }

  onError(msg: string) {
    this.error = msg;
    this.result = undefined;
  }
}

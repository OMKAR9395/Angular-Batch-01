import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class calcChild {
  //Parent CHild Relation
  @Input() a!: number;
  @Input() b!: number;
  @Input() op!: string;

  //Child Parent Relation
  @Output() error = new EventEmitter<string>();
  @Output() calculated = new EventEmitter<{ result: number; history: string[] }>();

  history: string[] = [];
  calculate() {
    let res = 0;
    if (this.op == '+') {
      res = this.a + this.b;
      this.add(`${this.a} + ${this.b} = ${res} } `);
    }
    if (this.op === '-') {
      res = this.a - this.b;
      this.add(`${this.a} - ${this.b} = ${res}  `);
    }
    if (this.op === '*') {
      res = this.a * this.b;
      this.add(`${this.a} * ${this.b} = ${res}  `);
    }
    if (this.op === '/') {
      res = this.a / this.b;
      this.add(`${this.a} / ${this.b} = ${res} `);
    }
    this.calculated.emit({
      result: res,
      history: [...this.history],
    });
  }

  add(text: string) {
    this.history.unshift(text);
  }
}

import { Component, signal } from '@angular/core';
import { Calcparent } from '../calculator/parent/parent';

@Component({
  selector: 'app-root',
  imports: [Calcparent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('parentchild');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Basic } from '../pages/basic/basic';
import { Encapsulation } from '../pages/encapsulation/encapsulation';
import { Host } from "../pages/host/host";
import { LifeCycle } from '../pages/life-cycle/life-cycle';
import { OnChanges } from '../pages/on-changes/on-changes';

@Component({
  selector: 'app-root',
  imports: [ OnChanges],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('component');

  studentName : any = "Omkar";
  OnCHanges(){
    this.studentName = document.querySelector("input")?.value;
  }
}

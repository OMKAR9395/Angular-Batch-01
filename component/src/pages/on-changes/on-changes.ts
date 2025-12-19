import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  imports: [],
  templateUrl: './on-changes.html',
  styleUrl: './on-changes.scss',
})
export class OnChanges {
@Input() name!:string;
}

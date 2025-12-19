import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  imports: [],
  templateUrl: './encapsulation.html',
  styleUrl: './encapsulation.scss',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Encapsulation {

}

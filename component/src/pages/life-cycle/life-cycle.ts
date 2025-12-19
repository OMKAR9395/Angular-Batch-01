import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.scss',
})
export class LifeCycle implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy{
  ngAfterViewInit(): void {
        confirm("Ng After ngAfterViewInit ");

  }
  ngOnDestroy(): void {
    confirm("On destroyed content");
  }

constructor(){
  confirm("Constructor Called ");
}
  ngOnInit(): void {
    confirm("This is from Initialized Component");
  }

ngDoCheck(): void {
  confirm("This Is Do CHeck");
}
ngAfterContentInit(): void {
  confirm("Ng After Content Init");
}
ngAfterContentChecked(): void {
    confirm("Ng After AfterContentChecked ");

}

}

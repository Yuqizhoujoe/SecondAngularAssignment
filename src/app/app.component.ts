import { Component, Input, OnInit, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentChecked,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit {
  constructor() {
    console.log("parent Constructor");
  }
  ngOnInit() {
    console.log("parent ngOnInit");
  }
  ngOnChanges() {
    console.log("parent ngOnChanges");
  }
  ngDoCheck() {
    console.log("parent ngDoCheck");
  }
  ngOnDestroy() {
    console.log("parent ngOnDestroy");
  }
  ngAfterContentInit() {
    console.log("parent ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("parent ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("parent ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("parent ngAfterViewChecked");
  }
}

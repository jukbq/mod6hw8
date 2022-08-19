import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrader',
  templateUrl: './hrader.component.html',
  styleUrls: ['./hrader.component.scss']
})
export class HraderComponent implements OnInit {

  public activeClass = true;

  constructor() { }

  ngOnInit(): void {
  }

  active(){
    this.activeClass
  }
}

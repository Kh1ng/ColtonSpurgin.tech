import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'ngproj-root',
  templateUrl: './ngproj.component.html',
  styleUrls: ['./ngproj.component.css'],
})
export class NgProjComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  needToolbar() {
    // console.log(document.location.origin);
  }
}

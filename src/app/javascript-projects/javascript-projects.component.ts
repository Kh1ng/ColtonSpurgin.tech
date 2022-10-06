import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-projects',
  templateUrl: './javascript-projects.component.html',
  styleUrls: ['./javascript-projects.component.scss']
})
export class JavascriptProjectsComponent implements OnInit {

  projects = new Array();

  constructor() {

  }

  ngOnInit(): void {
  }

}

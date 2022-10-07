import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-projects',
  templateUrl: './javascript-projects.component.html',
  styleUrls: ['./javascript-projects.component.scss']
})

export class JavascriptProjectsComponent implements OnInit {

  projects = new Array();
  currProj: project;
  selection: number = 0;



  constructor() {
    let test = new project("test notes", "test stuff", 1);
    let test2 = new project("test notes2", "test stuff2", 2);
    let test3 = new project("test notes3", "test stuff3", 3);
    this.projects.push(test);
    this.projects.push(test2);
    this.projects.push(test3);
    this.currProj = this.projects[this.selection];
  }

  getProjects() {
    return this.projects;
  }

  ngOnInit(): void {
  }
}

export class project {
  value: number;
  notes: string;
  stuff: string;
  viewValue: number;

  constructor(notes: string, stuff: string, value: number) {
    this.notes = notes;
    this.value = value;
    this.stuff = stuff;
    this.viewValue = this.value;
  }

  projFromSelection(selection: number) {
    switch (selection) {
      case 0:

    }
  }

  getStuff() {
    return this.stuff;
  }

  getNotes() {
    return this.notes;
  }
}




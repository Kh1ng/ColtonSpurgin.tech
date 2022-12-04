import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { NoPreloading } from '@angular/router';

interface Project {
  name: string;
  notes: string;
  stuff: string;
  func: any;
}

@Component({
  selector: 'app-javascript-projects',
  templateUrl: './javascript-projects.component.html',
  styleUrls: ['./javascript-projects.component.scss'],
})
export class JavascriptProjectsComponent implements OnInit {
  selected: any = 0;
  func: any;

  Projects: Project[] = [
    {
      name: 'Guessing Game',
      notes: 'Here be notes',
      stuff: 'Here be stuff',
      func: this.nope(),
    },
    {
      name: 'Hello World',
      notes: 'It works!',
      stuff: 'Hello From TypeScript',
      func: this.nope(),
    },
    {
      name: 'tester2',
      notes: 'neat-o',
      stuff: 'insert stuff here',
      func: this.nope(),
    },
  ];

  constructor() {}

  theStuff(selection: number) {
    return this.Projects[selection].stuff;
  }

  theNotes(selection: number) {
    return this.Projects[selection].notes;
  }

  nope() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';

interface Project {
name: string;
notes: string;
stuff: string;
}

@Component({
  selector: 'app-javascript-projects',
  templateUrl: './javascript-projects.component.html',
  styleUrls: ['./javascript-projects.component.scss']
})
export class JavascriptProjectsComponent implements OnInit {

  selected: any = 0;

  Projects:Project[] = [
    {name: "startPage", notes: "Here be notes", stuff: "Here be stuff"},
    {name: 'Hello World', notes: "It works!", stuff: "Hello From TypeScript"},
    {name: "tester2", notes: "neat-o", stuff: "insert stuff here"}
  ]

  constructor() {}

  theStuff(selection: number) {
    return this.Projects[selection].stuff;
  }

  theNotes(selection: number) {
    return this.Projects[selection].notes;
  }



  ngOnInit(): void {
  }
}




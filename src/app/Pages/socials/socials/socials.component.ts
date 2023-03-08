import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  label: string;
  content: any;
}

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  tiles: Tile[] = [
    {
      label: 'Bio + Pics',
      cols: 3,
      rows: 3,
      color: 'lightpink',
      content: `    Hello and welcome to my online portfolio, I have various school assignments, personal projects and some information about me and my
    work experience. I am currently a computer science student at The University of West Florida and active duty in the Air Force until 2025. 
    Due to my service commitment I am interested in part work or remote internships. Please browse whatever you'd like and contact me with any questions.`,
    },

    {
      label: 'Work&Skills',
      cols: 1,
      rows: 6,
      color: 'lightgreen',
      content: 'Work, Skills, Education',
    },

    {
      label: 'Four',
      cols: 3,
      rows: 1,
      color: '#DDBDF1',
      content: 'kjhkljfhgjlf',
    },

    { label: 'One', cols: 2, rows: 2, color: 'lightblue', content: 'Pic' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

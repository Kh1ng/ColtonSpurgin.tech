import { Component, NgModule, OnInit } from '@angular/core';
// import * as githubfeed from 'github-activity-feed';
// import * as octicons from '@primer/octicons';
// import * as mustache from 'mustache';

@Component({
  selector: 'app-ghactivity',
  templateUrl: './ghactivity.component.html',
  styleUrls: ['./ghactivity.component.scss',]
})

export class GhactivityComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }
}

// export module feed {
//   githubfeed.feed({
//     username: "Kh1ng",
//     selector: "#feed",
//     limit: 20, // optional
//   });
// }
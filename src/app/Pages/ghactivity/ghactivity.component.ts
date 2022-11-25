import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs-compat/operator/throttleTime';
// import * as GitHubActivity from 'github-activity-feed';

declare const GHfeed: any;

@Component({
  selector: 'app-ghactivity',
  templateUrl: './ghactivity.component.html',
  styleUrls: ['./ghactivity.component.scss'],
})
export class GhactivityComponent implements OnInit {
  feed: any;
  constructor() {
    this.feed = GHfeed;
  }

  

  ngOnInit(): void {
    // this.#id;
  }
}

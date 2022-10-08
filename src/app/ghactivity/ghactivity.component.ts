import { Component, NgModule, OnInit } from '@angular/core';
import * as GitHubActivity from 'github-activity-feed';

@Component({
  selector: 'app-ghactivity',
  templateUrl: './ghactivity.component.html',
  styleUrls: ['./ghactivity.component.scss'],
})
export class GhactivityComponent implements OnInit {
  constructor() {}

  ghf: any = GitHubActivity.feed({
    username: 'Kh1ng',
    selector: '#feed',
    limit: 20, // optional
  });

  ngOnInit(): void {
    this.ghf;
  }
}

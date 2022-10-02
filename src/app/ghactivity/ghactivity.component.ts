import { Component, OnInit } from '@angular/core';
import { GitHubActivity } from 'node_modules/github-activity-feed/dist/github-activity.min.js';
// import { octicons } from 'node_modules/octicons/build/font/octicons.css';
// import { mustache } from 'node_modules/mustache/mustache.min.js';

@Component({
  selector: 'app-ghactivity',
  templateUrl: './ghactivity.component.html', 
  styleUrls: ['./ghactivity.component.scss', ]
})
export class GhactivityComponent implements OnInit {

feed = GitHubActivity.feed({
  username: "Kh1ng",
  selector: "#feed",
  limit: 20, // optional
});

  constructor() { 
    
  }
  
  ngOnInit(): void {
    
  }


}


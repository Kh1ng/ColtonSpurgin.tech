import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit {
  loadedPosts = [];
  screen: any;

  constructor(private http: HttpClient) {
    // screen = this.getStart();
  }

  ngOnInit(): void {}

  getStart() {
    return this.http.get('localhost:8080/start');
  }
}

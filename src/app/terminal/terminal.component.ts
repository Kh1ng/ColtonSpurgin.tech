import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    let dat = this.http.get('localhost:8080/greeting').subscribe(content => {
      console.log(content)
    });
      console.log(dat.toString());
  }

  onClearPosts() {
    // Send Http request
  }

  ngOnInit(): void {
  }

}

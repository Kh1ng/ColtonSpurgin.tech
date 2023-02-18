import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TheRearService } from './the-rear.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  providers: [TheRearService],
})
export class TerminalComponent implements OnInit {
  constructor() {
    // screen = this.getStart();
  }

  ngOnInit(): void {}
}

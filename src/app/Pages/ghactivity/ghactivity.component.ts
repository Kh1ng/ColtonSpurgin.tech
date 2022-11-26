import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs-compat/operator/throttleTime';

@Component({
  selector: 'app-ghactivity',
  templateUrl: './ghactivity.component.html',
  styleUrls: ['./ghactivity.component.scss'],
})
export class GhactivityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private firstObsSubscription!: Subscription;
  counter!: number;

  constructor() {}

  ngOnInit() {
    this.firstObsSubscription = interval(1000).subscribe((count) => {
      // console.log(count);
      this.counter = count;
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}

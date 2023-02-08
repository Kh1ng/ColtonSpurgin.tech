import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private firstObsSubscription!: Subscription;
  private secondObs!: Subscription;
  counter!: number;
  secondCounter!: number;

  constructor() {}

  ngOnInit() {
    this.firstObsSubscription = interval(1000).subscribe((count) => {
      // console.log(count);
      this.counter = count;
    });

    // const customObs = Observable.create(observer => {
    //     let count = 0;
    //     setInterval(() => {
    //       observer.next(count);
    //       observer.error(new Error('Count is greater than 3!'));
    //     }, 1000);
    //   }
    // );

    // this.secondObs = customObs.subscribe((count2: number) => {
    //   this.secondCounter = count2;
    // });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}

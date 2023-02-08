import { Component, OnInit } from '@angular/core';

declare function guessingGame(): void;

@Component({
  selector: 'app-guessing-game',
  templateUrl: './guessing-game.component.html',
  styleUrls: ['./guessing-game.component.scss'],
})
export class GuessingGameComponent implements OnInit {
  projectScript: HTMLScriptElement;
  constructor() {
    this.projectScript = document.createElement('script');
    this.projectScript.src = 'src/assets/JSProjects/Guess My Number/script.js';
    document.body.appendChild(this.projectScript);
  }

  ngOnInit(): void {}
}

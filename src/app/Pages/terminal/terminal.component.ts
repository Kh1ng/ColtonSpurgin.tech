import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TheRearService } from './the-rear.service';
import { TriviaService } from './trivia.service';
import { Question } from './question';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  providers: [TheRearService, TriviaService],
})
export class TerminalComponent implements OnInit {
  
  questionList: any;

  constructor(private triviaService: TriviaService) {
    this.questionList = this.triviaService.getQuestions();
  }

  ngOnInit(): void {
    // this.questions = TriviaService.getQuestions();
  }
}

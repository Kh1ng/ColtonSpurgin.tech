import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from './question';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  questionList: any;
  constructor(private http: HttpClient) {
    this.questionList = this.getQuestions();
  }

  triviaUrl = 'https://opentdb.com/api.php?amount=10';

 getQuestions() {
    this.http.get<Question>(this.triviaUrl).pipe(
      map((response: any) => {
        const questions = response.results.map((result: any) => result.question);
        const answers = response.results.map((result: any) => result.correct_answer);
        questions.forEach((element: any) => console.log(element));
        return { questions, answers };
      })
    );
  }

  private apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';

  getQuestionsAndAnswers() {
    return this.http.get(this.apiUrl);
  }

  ngOnInit() {
    console.log("init test");
    console.log(this.getQuestions())
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

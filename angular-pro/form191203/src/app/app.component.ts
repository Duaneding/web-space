import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { QuestionDropdown } from './dynamic-form-test/question-dropdown';
import { QuestionService } from './question.service';
import { Component } from '@angular/core';
import { QuestionTextbox } from './dynamic-form-test/question-textbox';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers:[QuestionService]
})
export class AppComponent {
  title = 'form191203';
  questions:any[] = [];
  data$;
  constructor(private qs:QuestionService){
    this.questions = this.qs.getQuestions()
    this.data$ = ajax('../assets/arr.json').pipe(tap(d => console.log(d)))
  }
  fromEvent(target,eventname){
    return new Observable((observer) => {
      const handle = observer.next()
      target.addEventListener(eventname,handle)
      return {
        unsubscribe:() => {
          target.removeEventListener(eventname,handle)
        }
      }
    })
  }
  sequenceSubscriber(observer) {
    const seq = [1, 2, 3];
    let timeoutId;

    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(arr, idx) {
      timeoutId = setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
          observer.complete();
        } else {
          doSequence(arr, ++idx);
        }
      }, 1000);
    }

    doSequence(seq, 0);

    // Unsubscribe should clear the timeout to stop execution
    return {unsubscribe() {
      clearTimeout(timeoutId);
    }};
  }

  // Create a new Observable that will deliver the above sequence
  sequence = new Observable(this.sequenceSubscriber);



  // Logs:
  // (at 1 second): 1
  // (at 2 seconds): 2
  // (at 3 seconds): 3
  // (at 3 seconds): Finished sequence
  questionstest:any[] = [

    new QuestionDropdown({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3,
      selected:'good'
    }),

    new QuestionTextbox({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new QuestionTextbox({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    })
  ];
}

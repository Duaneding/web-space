import { QuestionBase } from "./dynamic-form/question-base";
import { Injectable } from "@angular/core";
import { DropdownQuestion } from "./dynamic-form/question-dropdown";
import { TextboxQuestion } from './dynamic-form/question-textbox';

@Injectable()
export class QuestionService {
  constructor() {}
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key:'firstname',
        label:'First name',
        value:'bob',
        required:true,
        order:1
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return questions.sort((a,b) => a.order - b.order)
  }
}

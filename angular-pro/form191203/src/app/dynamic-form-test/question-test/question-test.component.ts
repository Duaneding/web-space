import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-test',
  templateUrl: './question-test.component.html',
  styleUrls: ['./question-test.component.less']
})
export class QuestionTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() question:QuestionBase<any>;
  @Input() form:FormGroup;
  get isValid(){
    return this.form.controls[this.question.key].valid
  }

}

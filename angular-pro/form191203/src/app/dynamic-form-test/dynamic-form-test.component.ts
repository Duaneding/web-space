import { QuestionControlService } from './question-control.service';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.less'],
  providers:[QuestionControlService]
})
export class DynamicFormTestComponent implements OnInit {

  constructor(private qcs:QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions)
  }
  playLoad = '';
  @Input() questions:QuestionBase<any>[];
  form:FormGroup
  onSubmit(){
    this.playLoad = JSON.stringify(this.form.value)
    console.log(this.form)
  }
}

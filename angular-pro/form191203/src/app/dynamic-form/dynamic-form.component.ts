import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less'],
  providers:[QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  constructor(private qcs:QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions)
  }
  @Input() questions:QuestionBase<any>[] = [];
  form:FormGroup;
  payLoad = '';
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}

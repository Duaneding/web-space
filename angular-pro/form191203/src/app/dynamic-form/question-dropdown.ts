import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string>{
  controlType='dropdown'
  options:{key:string,value:string}[] = []
  constructor(opt){
    super(opt)
    this.options = opt['options'] || []
  }
}

import { QuestionBase } from './question-base';
export class QuestionTextbox extends QuestionBase<string>{
  controlType = 'textbox';
  type:string;
  constructor(opt:{} = {}){
    super(opt)
    this.type = opt['type'] || ''
  }
}

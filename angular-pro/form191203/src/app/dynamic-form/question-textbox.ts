import { QuestionBase } from './question-base';


export class TextboxQuestion extends QuestionBase<string>{
  controlType = 'textbox';
  type:string;
  constructor(opt){
    super(opt)
    this.type = opt['type'] || '';
  }


}

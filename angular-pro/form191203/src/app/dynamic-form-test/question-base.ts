export class QuestionBase<T>{
  value:T;
  label:string;
  controlType:string;
  order:number;
  required:boolean;
  key:string;
  selected:string;

  constructor(options:{
    value?:T,
    label?:string,
    controlType?:string,
    order?:number,
    required?:boolean,
    key?:string,
    selected?:string
  } = {}){
    this.controlType = options.controlType || '';
    this.order = options.order ? options.order : 1;
    this.label = options.label || '';
    this.value = options.value;
    this.required = !!options.required;
    this.key = options.key || '';
    this.selected = options.selected || ''
  }
}

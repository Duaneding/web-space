export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  constructor(options:{
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
  }={}){
    this.value = options.value;
    this.key = options.key;
    this.required = options.required;
    this.label = options.label;
    this.controlType = options.controlType;
    this.order = options.order === undefined ? 1 : options.order
  }
}

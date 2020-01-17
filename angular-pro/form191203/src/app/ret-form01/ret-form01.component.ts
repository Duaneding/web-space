import { HeroService } from './../hero.service';
import { map, catchError, tap, switchMap, mapTo, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,Validators, ValidatorFn, AbstractControl, FormGroup, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
function fbdname(nameRe:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:any} | null => {
    const forbiden = nameRe.test(control.value)
    return forbiden?{'fbdname': {value:control.value }}:null
  }
}
const identityValidator:ValidatorFn = (control:FormGroup):ValidationErrors | null => {
  const state = control.get('state');
  const zip = control.get('zip')
  return state.value && zip.value && state.value === zip.value ? {'identityvalidator':true} : null
}
@Component({
  selector: 'app-ret-form01',
  templateUrl: './ret-form01.component.html',
  styleUrls: ['./ret-form01.component.less']
})

export class RetForm01Component implements OnInit {

  constructor(private fb:FormBuilder,private heroServece:HeroService) { }

  ngOnInit() {

  }
  asyncvalidator:AsyncValidatorFn = (control:AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return this.heroServece.isnameused(control.value).pipe(
      switchMap(islastname => islastname?of({lastname:true}):of(null))
    )
  }
  profilename = this.fb.group({
    firstname:['',[Validators.required,Validators.minLength(4),fbdname(/大司马缸/i)]],
    lastname:['',{asyncValidators:[this.asyncvalidator]}],
    address:this.fb.group({
      street: [''],
      city: [''],
      state: ['',Validators.compose([Validators.required,fbdname(/Alabama/i)])],
      zip: ['',{updateOn: 'blur'}]      //失去焦点后再校验
    },{validators:identityValidator}),
    aliases:this.fb.array([
      this.fb.control('',{updateOn:'submit'})
    ])
  })

  updateprofilename(){
    console.log(this.profilename)
    this.profilename.patchValue({
      firstname:'大司马',
      lastname:'小龙',
      address:{
        state:'Alabaa'
      }
    })
  }
  onSubmit(){
    if(this.profilename.invalid) return
  }
  get aliases(){
    return this.profilename.get('aliases') as FormArray
  }
  addalias(){
    this.aliases.push(this.fb.control(''))
  }
}

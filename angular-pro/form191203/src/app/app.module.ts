import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetForm01Component } from './ret-form01/ret-form01.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormTestComponent } from './dynamic-form-test/dynamic-form-test.component';
import { QuestionTestComponent } from './dynamic-form-test/question-test/question-test.component';

@NgModule({
  declarations: [
    AppComponent,
    RetForm01Component,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormTestComponent,
    QuestionTestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

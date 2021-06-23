import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../shared/components/card/message/message.module';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MessageModule,
    RouterModule
  ]
})
export class HomeModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../shared/components/card/message/message.module';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MessageModule
  ]
})
export class HomeModule { }
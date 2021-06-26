import { MessageModule } from './../../shared/components/card/message/message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [
    PhotoFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule,
    FormsModule
  ]
})
export class PhotoFormModule { }
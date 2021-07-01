import { PhotoCommentsComponent } from './photo-details/photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchComponent } from './photo-list/search/search.component';
import { CardModule } from './../shared/components/card/card.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photo-form/photo-form.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
  PhotoComponent,
  PhotoListComponent,
  PhotoFormComponent,
  PhotosComponent,
  PhotoDetailsComponent,
  PhotoCommentsComponent,
  FilterByDescription,
  LoadButtonComponent,
  SearchComponent
],
imports: [
  HttpClientModule,
  CommonModule,
  CardModule,
  DarkenOnHoverModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
]
})
export class PhotosModule { }

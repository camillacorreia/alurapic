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
  FilterByDescription,
  LoadButtonComponent,
  SearchComponent
],
imports: [ 
  HttpClientModule,
  CommonModule,
  CardModule,
  DarkenOnHoverModule
]
})
export class PhotosModule { }

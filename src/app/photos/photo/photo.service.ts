import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(`${environment.baseUrl}/${userName}/photos`);
  }
}

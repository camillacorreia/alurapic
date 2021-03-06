import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(`${environment.baseUrl}/${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(`${environment.baseUrl}/${userName}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();

    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http
      .post(`${environment.baseUrl}/photos/upload`, formData)
  }

  findById(photoId: number) {
    return this.http.get<Photo>(`${environment.baseUrl}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(`${environment.baseUrl}/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(`${environment.baseUrl}/photos/${photoId}/comments`, { commentText} );
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${environment.baseUrl}/photos/${photoId}`);
  }
}

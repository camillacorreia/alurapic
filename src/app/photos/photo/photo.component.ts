import { environment } from './../../../environments/environment';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  private _url = '';

  @Input() description='';
  @Input() set url(url: string) {
    if(!url.startsWith('data')) {
      this._url = `${environment.baseUrl}/imgs/${url}`;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }
}

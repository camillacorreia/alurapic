import { PhotoService } from './../photo/photo.service';
import { Photo } from './../photo/photo';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName;

    return this.service.listFromUser(userName);
  }
}
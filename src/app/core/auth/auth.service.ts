import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(userName: string, password: string) {
    return this.http
    .post(
      `${environment.baseUrl}/user/login`,
      { userName, password },
      { observe: 'response' }
    )
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      this.userService.setToken(authToken ?? '');
    }))
  }
}

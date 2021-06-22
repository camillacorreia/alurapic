import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
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
      this.tokenService.setToken(authToken ?? '');
    }))
  }
}

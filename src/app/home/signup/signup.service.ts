import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) {}

  checkUserNameTaken(userName: string) {
    return this.http.get(`${environment.baseUrl}/user/exists/${userName}`);
  }

  signup(newUser: NewUser) {
    return this.http.post(`${environment.baseUrl}/user/signup`, { newUser });
  }
}
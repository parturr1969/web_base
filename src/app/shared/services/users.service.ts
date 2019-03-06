import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import { map } from 'rxjs/operators';
import {pipe} from 'rxjs/internal/util/pipe';


@Injectable()
export class UsersService {
  private userUrl = 'http://localhost:3000/users';

  constructor(private  http: HttpClient) {}

  getUserByEmail(email: String): Observable<User> {
    return this.http.get<User[]>(this.userUrl + '?email=' + email)
      .pipe(
        map(response => {
          return response;
        }),
        map((users: User[]) => {
          return users[0] ? users[0] : undefined;
        }));
  }

  createNewUser(user: User): Observable<User> {
      return this.http.post<User>(this.userUrl, user)
        .pipe(
          map(response => {
            return response;
          }),
          map((userok: User) => {
            return userok;
          }));
  }
}




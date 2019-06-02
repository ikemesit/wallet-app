import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User, UserService } from './test-service.model';

const cudOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class TestService extends UserService {
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(data => console.log(data)), // eyeball results in the console
      catchError(this.handleError)
    );
  }

  // This get-by-id will 404 when id not found
  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url).pipe(catchError(this.handleError));
  }

  // This get-by-id does not 404; returns undefined when id not found
  // getUser<Data>(id: number): Observable<User> {
  //   const url = `${this._usersUrl}/?id=${id}`;
  //   return this.http.get<User[]>(url)
  //     .map(users => users[0] as Users)
  //     .catch(this.handleError);
  // }

  createUser(user: User): Observable<User> {
    // const user = user;

    return this.http
      .post<User>(this.userUrl, user, cudOptions)
      .pipe(catchError(this.handleError));
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.userUrl}/${id}`;

    return this.http
      .delete<User>(url, cudOptions)
      .pipe(catchError(this.handleError));
  }

  // searchUsers(term: string): Observable<User[]> {
  //   term = term.trim();
  //   // add safe, encoded search parameter if term is present
  //   const options = term ? { params: new HttpParams().set('name', term) } : {};

  //   return this.http
  //     .get<User[]>(this.userUrl, options)
  //     .pipe(catchError(this.handleError));
  // }

  updateUser(user: User): Observable<null | User> {
    return this.http
      .put<User>(this.userUrl, user, cudOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}

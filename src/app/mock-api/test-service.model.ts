import { Observable } from 'rxjs';

export class User {
  constructor(
    public id: number = 0,
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public phone: string = '',
    public username: string = '',
    public password: string = '',
    public address: string = '',
    public state: string = '',
    public country: string = ''
  ) {}
  clone() {
    return new User(
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.phone,
      this.username,
      this.password,
      this.address,
      this.state,
      this.country
    );
  }
}

export abstract class UserService {
  userUrl = 'api/user';

  userCollection: User[];

  abstract getUser(id: number): Observable<User>;
  abstract getUsers(): Observable<User[]>;
  abstract createUser(user: User): Observable<User>;
  abstract deleteUser(user: User | number): Observable<User>;
  abstract updateUser(user: User): Observable<User>;
}

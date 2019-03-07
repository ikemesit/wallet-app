import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:any[];
  constructor(private http: HttpClient) {}

  getpostservice(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<any> {
    return this.http.get('http://localhost:4600/posts').pipe(map((posts) => {
      return posts;
    }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://bjdjsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url)
      .pipe(
        catchError((error: Response) => {
          if (error.status === 404)
            return throwError(new BadInput(error))
          console.log('App error')
          return throwError(new AppError(error))
        })
      )
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError((error: Response) => {
          if (error.status === 404)
            return throwError(new BadInput(error))

          return throwError(new AppError(error))
        })
      )
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' +post.id, JSON.stringify({ isRead: true }))
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' +id)
      .pipe(
        catchError((error: Response) => {
          if (error.status === 404)
            return throwError(new NotFoundError())

          return throwError(new AppError(error))
        })
      )
  }
}

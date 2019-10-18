import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }

  // getPosts() {
  //   return this.http.get(this.url)
  //     .pipe(
  //       catchError((error: Response) => {
  //         if (error.status === 404)
  //           return throwError(new BadInput(error))
  //         console.log('App error')
  //         return throwError(new AppError(error))
  //       })
  //     )
  // }

  // createPost(post) {
  //   return this.http.post(this.url, JSON.stringify(post))
  //     .pipe(
  //       catchError((error: Response) => {
  //         if (error.status === 404)
  //           return throwError(new BadInput(error))

  //         return throwError(new AppError(error))
  //       })
  //     )
  // }

  // updatePost(post) {
  //   return this.http.patch(this.url + '/' +post.id, JSON.stringify({ isRead: true }))
  // }

  // deletePost(id) {
  //   return this.http.delete(this.url + '/' +id)
  //     .pipe(
  //       catchError((error: Response) => {
  //         if (error.status === 404)
  //           return throwError(new NotFoundError())

  //         return throwError(new AppError(error))
  //       })
  //     )
  // }
}

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
export class DataService {
//   private url = 'https://bjdjsonplaceholder.typicode.com/posts';

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
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

  create(resource) {
    // return throwError(new AppError())
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError((error: Response) => {
          if (error.status === 404)
            return throwError(new BadInput(error))

          return throwError(new AppError(error))
        })
      )
  }

  update(resource) {
    return this.http.patch(this.url + '/' +resource.id, JSON.stringify({ isRead: true }))
  }

  delete(id) {
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

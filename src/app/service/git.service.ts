import { User } from './../class/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './../class/repository';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  constructor(private http: HttpClient) {}

  // user type assigned //
  user: User;

  // defining user interface //

  gitApi() {
    interface ApiResponse {
      img: string;
      name: string;
      repoUrl: string;
      userUrl: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          'https://api.github.com/users/ianodad?access_token=' +
            environment.accessToken
        )
        .toPromise()
        .then(
          response => {
            console.log(response);
            resolve();
          },
          error => {}
        );
    });

    return promise;
  }
}

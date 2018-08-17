import { User } from './../class/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './../class/repository';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  // user type assigned //
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '');
  }

  // defining user interface //

  gitApi() {
    interface ApiResponse {
      img: string;
      userName: string;
      repoUrl: string;
      userUrl: string;
      repos: string;
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
            // These is where we hold the data to a new array//
            this.user.img = response.avatar_url;
            this.user.userName = response.name;
            this.user.repoUrl = response.repos_url;
            this.user.userUrl = response.url;
            this.user.repos = response.public_repos;
            // response ends here//
            console.log(response);
            resolve();
          },
          error => {
            // ERROR GOES HERE //
          }
        );
    });

    return promise;
  }
}

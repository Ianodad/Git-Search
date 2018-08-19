import { User } from './../class/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './../class/repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  // user type assigned //
  user: User;
  repos: Repository;
  newRepos: any;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '');
    this.repos = new Repository('');
  }

  // defining user interface //

  gitUser() {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      login: string;
      repos_url: string;
      url: string;
      public_repos: string;
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
            this.user.avatar_url = response.avatar_url;
            this.user.name = response.name;
            this.user.login = response.login;
            this.user.repos_url = response.repos_url;
            this.user.url = response.url;
            this.user.public_repos = response.public_repos;
            // response ends here//
            // console.log(response);
            resolve();
          },
          error => {
            console.log('error');
            reject();
          }
        );
    });
    return promise;
  }

  getRepo() {
    interface ApiResponse {
      name: string;
      login: string;
      url: string;
      html_url: string;
      created_at: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          'https://api.github.com/users/ianodad/repos?access_token=' +
            environment.accessToken
        )
        .toPromise()
        .then(
          response => {
            this.newRepos = response;
            // response.forEach(element => {
            //   // this.repos = element.name;
            //   console.log(element.name);
            //   // console.log(element.name);
            // });
            // console.log(response);

            resolve();
          },
          error => {
            reject(error);
          }
        );
    });
    return promise;
  }
}

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  constructor(private http: HttpClient) {}

  gitApi() {
    return this.http
      .get(
        'https://api.github.com/users/ianodad?access_token=' +
          environment.accessToken
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}

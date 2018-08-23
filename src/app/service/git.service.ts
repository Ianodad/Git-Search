import { Search } from './../class/search';
import { User } from './../class/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './../class/repository';
import { Observable } from 'rxjs';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

@Injectable({
	providedIn: 'root'
})
export class GitService {
	// user type assigned //
	user: User;
	repos: Repository;
	newRepos: any;

	constructor(private http: HttpClient) {
		this.user = new User('', '', '', '', '', '', 0, 0, 0);
		this.repos = new Repository('');
	}

	// defining user interface //

	gitUser(userName = 'ianodad') {
		interface ApiResponse {
			avatar_url: string;
			name: string;
			login: string;
			html_url: string;
			bio: string;
			url: string;
			public_repos: number;
			following: number;
			followers: number;
		}

		let promise = new Promise((resolve, reject) => {
			this.http
				.get<ApiResponse>(
					'https://api.github.com/users/' + userName + '?access_token=' + environment.accessToken
				)
				.toPromise()
				.then(
					(response) => {
						// These is where we hold the data to a new array//
						this.user.avatar_url = response.avatar_url;
						this.user.name = response.name;
						this.user.login = response.login;
						this.user.html_url = response.html_url;
						this.user.bio = response.bio;
						this.user.url = response.url;
						this.user.public_repos = response.public_repos;
						this.user.following = response.following;
						this.user.followers = response.followers;

						// response ends here//
						console.log(response.following);
						resolve();
					},
					(error) => {
						console.log('error');
						reject();
					}
				);
		});
		return promise;
	}

	getRepo(userName = 'ianodad') {
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
					'https://api.github.com/users/' + userName + '/repos?access_token=' + environment.accessToken
				)
				.toPromise()
				.then(
					(response) => {
						this.newRepos = response;
						// response.forEach(element => {
						//   // this.repos = element.name;
						//   console.log(element.name);
						//   // console.log(element.name);
						// });
						// console.log(response);

						resolve();
					},
					(error) => {
						reject(error);
					}
				);
		});
		return promise;
	}
}

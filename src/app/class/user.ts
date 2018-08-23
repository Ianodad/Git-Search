export class User {
	public showDetails: boolean;
	constructor(
		public avatar_url: string,
		public name: string,
		public login: string,
		public html_url: string,
		public bio: string,
		public url: string,
		public public_repos: number,
		public following: number,
		public followers: number
	) {
		this.showDetails = false;
	}
}

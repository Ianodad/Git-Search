export class User {
  public showDetails: boolean;
  constructor(
    public avatar_url: string,
    public name: string,
    public login: string,
    public html_url: string,
    public bio: string,
    public url: string,
    public public_repos: string
  ) {
    this.showDetails = false;
  }
}

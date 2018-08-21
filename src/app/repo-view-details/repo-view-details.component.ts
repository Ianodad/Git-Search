// import { Search } from './../class/search';
import { GitService } from './../service/git.service';
import { Repository } from './../class/repository';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-view-details',
  templateUrl: './repo-view-details.component.html',
  providers: [GitService],
  styleUrls: ['./repo-view-details.component.css']
})
export class RepoViewDetailsComponent implements OnInit {
  repos: Repository;
  newRepos: any;
  userName: any;

  constructor(private gitService: GitService) {}

  ngOnInit() {
    this.gitService.getRepo(this.userName);
    this.newRepos = this.gitService;
    console.log(this.newRepos);
  }
}

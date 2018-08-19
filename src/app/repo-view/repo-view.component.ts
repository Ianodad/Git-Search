import { Repository } from './../class/repository';
import { GitService } from './../service/git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  providers: [GitService],
  styleUrls: ['./repo-view.component.css']
})
export class RepoViewComponent implements OnInit {
  repos: Repository;
  newRepos: any;

  toogleDetails(index) {
    this.repos.showDetails = !this.repos.showDetails;
  }
  constructor(public gitService: GitService) {}

  ngOnInit() {
    this.gitService.getRepo();
    console.log(this.gitService.newRepos);
    this.newRepos = this.gitService;
    console.log(this.newRepos);
    // console.log(this.repos);
  }
}

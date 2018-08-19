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

  constructor(private gitService: GitService) {}

  ngOnInit() {
    this.gitService.getRepo();
    console.log(this.gitService.newRepos);
    this.newRepos = this.gitService;
    console.log(this.newRepos);
  }
}

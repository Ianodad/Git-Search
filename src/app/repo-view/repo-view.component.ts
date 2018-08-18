import { Repository } from './../class/repository';
import { GitService } from './../service/git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  providers [GitService]
  styleUrls: ['./repo-view.component.css']
})
export class RepoViewComponent implements OnInit {

  repos: Repository;

  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.gitService.getRepo();
    this.repo = this.gitService
    console.log(repo)
  }

}

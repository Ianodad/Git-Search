import { GitService } from './../service/git.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [GitService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // newName: any;

  constructor(private gitService: GitService) {}

  searchSubmit($newName) {
    // console.log($newName.target.value);
    this.gitService.gitUser($newName.target.value);
  }
  ngOnInit() {
    // this.gitService.getRepo();
    // this.gitService.gitUser();
  }
}

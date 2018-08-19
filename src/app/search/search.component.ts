import { GitService } from './../service/git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [GitService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private gitService: GitService) {}

  searchSubmit() {}
  ngOnInit() {}
}

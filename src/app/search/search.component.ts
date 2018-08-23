import { GitService } from './../service/git.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	providers: [ GitService ],
	styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
	searchstring = '';
	constructor(private gitService: GitService) {}

	search() {
		this.gitService.gitUser(this.searchstring);
		this.gitService.getRepo(this.searchstring);

		console.log(this.searchstring);
	}
	ngOnInit() {
		this.gitService.getRepo();
		this.gitService.gitUser();
	}
}

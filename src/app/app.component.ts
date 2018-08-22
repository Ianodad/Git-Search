import { Search } from './class/search';
import { GitService } from './service/git.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GitService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'ianodad';
  search = '';

  constructor(private gitService: GitService) {}

  searchSubmit(event) {
    console.log(this.userName);
    this.gitService.gitUser(this.userName).then(info => {
      console.log(info);
    });
  }
}

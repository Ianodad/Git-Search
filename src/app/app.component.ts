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

  constructor(private gitService: GitService) {}

  searchSubmit(newName) {
    this.userName = newName;
    console.log(this.userName);
    this.gitService.gitUser(this.userName);
  }
}

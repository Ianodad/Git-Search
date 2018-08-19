import { User } from './../class/user';
import { GitService } from './../service/git.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [GitService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private gitService: GitService) {}

  toogleDetails(index) {
    this.user.showDetails = !this.user.showDetails;
  }

  ngOnInit() {
    this.gitService.gitUser();
    this.user = this.gitService.user;
    // console.log(this.user);
  }
}

import { GitService } from './../service/git.service';
import { User } from './../class/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  providers: [GitService],
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  @Input()
  user: User;

  constructor(private gitService: GitService) {}

  ngOnInit() {  }
}

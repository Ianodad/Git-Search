mport { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './../profile/profile.component';
import { RepoViewDetailsComponent } from './../repo-view-details/repo-view-details.component';
import { RepoViewComponent } from './../repo-view/repo-view.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'repo-view-details', component: RepoViewDetailsComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }

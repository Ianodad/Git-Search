import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RepoViewDetailsComponent } from './../repo-view-details/repo-view-details.component';
import { ProfileComponent } from './../profile/profile.component';
import { NotFoundComponent } from './../not-found/not-found.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'repo-view-details', component: RepoViewDetailsComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: []
})
export class RoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoViewComponent } from './repo-view/repo-view.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoViewDetailsComponent } from './repo-view-details/repo-view-details.component';
import { RoutingModule } from './routing/routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoViewComponent,
    SearchComponent,
    MenuComponent,
    RepoViewDetailsComponent,
    NotFoundComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

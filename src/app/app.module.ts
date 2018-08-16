import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { RepoViewComponent } from "./repo-view/repo-view.component";
import { SearchComponent } from "./search/search.component";
import { MenuComponent } from "./menu/menu.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepoViewComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

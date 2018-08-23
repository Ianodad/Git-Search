import { RepoViewDetailsComponent } from './repo-view-details/repo-view-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoViewComponent } from './repo-view/repo-view.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
// import { RoutingModule } from './routing/routing.module';
import { HooverDirective } from './hoover.directive';
import { TransformPipe } from './transform.pipe';

@NgModule({
	declarations: [
		AppComponent,
		ProfileComponent,
		RepoViewComponent,
		SearchComponent,
		MenuComponent,
		// RoutingModule,
		NotFoundComponent,
		RepoViewDetailsComponent,
		HooverDirective,
		TransformPipe
	],
	imports: [ BrowserModule, HttpClientModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeEpisodeComponent } from './liste-episode/liste-episode.component';
import { EpisodeComponent } from './episode/episode.component';
import { CreerTypeMediaComponent } from './admin/creation/creer-type-media/creer-type-media.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ListeEpisodeComponent,
    EpisodeComponent,
    CreerTypeMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

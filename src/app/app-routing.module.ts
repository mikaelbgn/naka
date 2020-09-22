import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreerTypeMediaComponent } from './admin/creation/creer-type-media/creer-type-media.component';
import { EpisodeComponent } from './episode/episode.component';


const routes: Routes = [
  { path: 'episode', component: EpisodeComponent },
  { path: 'admin/creer/type-media', component: CreerTypeMediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

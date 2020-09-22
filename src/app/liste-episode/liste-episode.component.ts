import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/model/Episode';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-liste-episode',
  templateUrl: './liste-episode.component.html',
  styleUrls: ['./liste-episode.component.css']
})
export class ListeEpisodeComponent implements OnInit {

  episodes: Array<Episode>;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getEpisodes().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.episodes = response;
  }

}

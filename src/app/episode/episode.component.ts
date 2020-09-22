import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/model/Item';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  numero: string;
  items: Array<Item>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.numero = params['numero'];
    });

    this.httpClientService.getItemsParEpisode(this.numero).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.items = response;
  }


}

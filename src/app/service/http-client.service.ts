import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from 'src/model/Episode';
import { News } from 'src/model/News';
import { TypeMedia } from 'src/model/TypeMedia';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getNews() {
    return this.httpClient.get<News[]>('http://localhost:8080/news/get');
  }

  getEpisodes() {
    return this.httpClient.get<Episode[]>('http://localhost:8080/episode/get');
  }

  getItemsParEpisode(numero: string) {
    return this.httpClient.get<Episode[]>('http://localhost:8080/items/get/episode=' + numero);
  }


  addTypeMedia(typeMedia: TypeMedia) {
    return this.httpClient.post<TypeMedia>('http://localhost:8080/type-media/add', typeMedia);
  }
}

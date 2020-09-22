import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { TypeMedia } from 'src/model/TypeMedia';

@Component({
  selector: 'app-creer-type-media',
  templateUrl: './creer-type-media.component.html',
  styleUrls: ['./creer-type-media.component.css']
})
export class CreerTypeMediaComponent implements OnInit {

typeMedia: TypeMedia = new TypeMedia();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }


  addTypeMedia() {
    this.httpClientService.addTypeMedia(this.typeMedia).subscribe(
      (user) => {
        this.router.navigate(['episode']);
      }
    );
  }
}

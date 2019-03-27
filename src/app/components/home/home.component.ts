import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  albums: any[] = [];

  constructor(private spotifyService: SpotifyService) {

    this.spotifyService.getNewReleases().subscribe((response: any) => {
      this.albums = response.albums.items;
      console.log(response);
    });

  }

}

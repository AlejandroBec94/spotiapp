import {Component} from '@angular/core';
import {SpotifyService} from '../../../services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  UserInfo: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getUser().subscribe(user => {
      this.UserInfo = user;
      // console.log(user);
    });
  }


}

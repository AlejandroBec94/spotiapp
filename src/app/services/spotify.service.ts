import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    // console.log('Service listo');
  }

  public getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA9GGN23WRas_rRDgwtCjhSoUpJwOacM14SG3g77dy9rEePfWDJ9kTXQ4FLJSOt_fPG3wkoGVbXzjTG2eVpw98_hrh76oJCDiHUTaxoTrB1CURkYWvkWfy12kAd4UJbiOmZFkXCf09xNOFfhwI'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).subscribe(data => {
      console.log(data);
    });

  }

}

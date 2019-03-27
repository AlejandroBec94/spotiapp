import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    // console.log('Service listo');
    /*const UserInfo = this.getUser().subscribe(data => {
      console.log(data);
    });*/
  }

  public getUser() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCp9VkBTwiYawK_04sw7FYATllqatgsBXjqRjb0SuCBSa3aZ18128wVOSg9aa6vmp1P2X0xcQQCOetxWjlYxnXXuWbR5HLIdImKA4mjToIoSYRM9BwdrZrMfIicnAYXhjSoNDuOsmcZdzciOSw'
    });

    return this.http.get('https://api.spotify.com/v1/me', {headers});
  }

  public getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCTZGXOsJvH1zfywWWnjBIDgIsKIYP1GZCQiGMEsFNmSNvHjTea-mWGbSaEww3C56zzHfg3lNBggG_dQG8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=21', {headers});

  }

}

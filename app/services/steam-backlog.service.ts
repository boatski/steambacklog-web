import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class SteamBacklogService {
  constructor(public http: Http) { }

  getPlayerSummary(id: number | string) {
    var result;
    console.log('resolving id: ' + 'http://127.0.0.1:3001/summary/' + id);
    this.http.get('http://127.0.0.1:3001/summary/' + id)
    .map(response => response.json())
    .subscribe(
      response => console.log(response)
    );
  }
}

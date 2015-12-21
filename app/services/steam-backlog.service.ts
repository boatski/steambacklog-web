import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class SteamBacklogService {
  constructor(public http: Http) { }

  getPlayerSummary(id: number | string) {

    return this.http.get('http://127.0.0.1:3001/summary/' + id)
    .map(res => res.json());
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }
}

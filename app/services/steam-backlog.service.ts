import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SteamBacklogService {
    constructor(public http:Http) {
    }

    getPlayerSummary(id:string) {
        return this.http.get('http://127.0.0.1:3001/summary/' + id)
            .map(res => res.json());
    }

    getPlayerGames(id:string) {
        return this.http.get('http://127.0.0.1:3001/games/' + id)
            .map(res => res.json());
    }
}

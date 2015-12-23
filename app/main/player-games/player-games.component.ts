import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {UserService} from '../../services/user.service';

import {PlayerGames} from '../../models/player-games';

@Component({
  selector: 'player-games',
  templateUrl: 'app/main/player-games/player-games.html'
})
export class PlayerGamesComponent {
  games:PlayerGames;
  headers = ['Name', 'Playtime', 'App'];

  constructor(
    private _routeParams:RouteParams,
    private _service:SteamBacklogService,
    private _userService:UserService) {

  }

  ngOnInit() {
    let id = this._routeParams.get('id');

    this._service.getPlayerGames(id)
    .subscribe(
      res => this.games = new PlayerGames(res.playerGames),
      err => console.log(err),
      () => console.log('games retrieved', this.games)
    );
  }
}

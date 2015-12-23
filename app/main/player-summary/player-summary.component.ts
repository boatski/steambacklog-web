import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {UserService} from '../../services/user.service';

import {PlayerSummary} from '../../models/player-summary';

@Component({
  selector: 'player-summary',
  templateUrl: 'app/main/player-summary/player-summary.html'
})
export class PlayerSummaryComponent {
  player:PlayerSummary;

  constructor(
    private _routeParams:RouteParams,
    private _service:SteamBacklogService,
    private _userService:UserService) {
  }

  ngOnInit() {
    let id = this._routeParams.get('id');

    this._service.getPlayerSummary(id)
    .subscribe(
      res => this.player = new PlayerSummary(res.playerBadges, res.playerBans, res.playerSummary),
      err => console.log(err),
      () => this._userService.setSteamId(this.player.summary.personaname)
    );
  }
}

import {Component, EventEmitter} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {PlayerSummary} from '../../models/player-summary';

@Component({
  selector: 'player-summary',
  templateUrl: 'app/main/player-summary/player-summary.html',
  outputs: ['steamid']
})
export class PlayerSummaryComponent {
  steamid = new EventEmitter();
  public player:PlayerSummary;

  constructor(
    private _routeParams:RouteParams,
    private _service:SteamBacklogService) {
  }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this.steamid.emit(id);

    this._service.getPlayerSummary(id)
    .subscribe(
      res => this.player = new PlayerSummary(res.playerBadges, res.playerBans, res.playerSummary),
      err => console.log(err),
      () => console.log('summary retrieved for: ', this.player)
    );
  }
}

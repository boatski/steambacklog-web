import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';

class PlayerSummary {
  constructor(
    public badges: Object,
    public bans: Object,
    public summary: Object
  ) {
    // console.log('badges', badges);
    // console.log('bans', bans);
    // console.log('summary', summary);
  }
}

@Component({
  selector: 'player-summary',
  templateUrl: 'app/main/player-summary/player-summary.html'
})
export class PlayerSummaryComponent {
  public player;

  constructor(
    private _routeParams:RouteParams,
    private _service:SteamBacklogService) {
  }

  ngOnInit() {
    let id = this._routeParams.get('id');

    this._service.getPlayerSummary(id)
    .subscribe(
      res => this.player = new PlayerSummary(res.playerBadges.response, res.playerBans, res.playerSummary.response.players[0]),
      err => console.log(err),
      () => console.log('summary retrieved for: ', this.player)
    );
  }

  ngOnDestroy() {
    console.log('summary component destroyed');
  }
}

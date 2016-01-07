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
    private routeParams:RouteParams,
    private backlogService:SteamBacklogService,
    private userService:UserService) {
  }

  ngOnInit() {
    let id = this.routeParams.get('id');

    this.backlogService.getPlayerSummary(id)
    .subscribe(
      res => this.player = new PlayerSummary(res.username, res.summary.playerBadges, res.summary.playerBans, res.summary.playerSummary),
      err => console.log(err),
      () => this.userService.setSteamId(this.player.id)
    );
  }
}

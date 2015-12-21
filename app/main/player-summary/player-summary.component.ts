import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';

@Component({
  selector: 'player-summary',
  templateUrl: 'app/main/player-summary/player-summary.html'
})
export class PlayerSummaryComponent {
  constructor(
    private _routeParams:RouteParams,
    private _service:SteamBacklogService) {
  }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getPlayerSummary(id);
  }

  ngOnDestroy() {
    console.log('summary component destroyed');
  }
}

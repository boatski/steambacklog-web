import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {UserService} from '../../services/user.service';

import {PlayerAchievements} from '../../models/player-achievements';

@Component({
    selector: 'player-achievements',
    templateUrl: 'app/main/player-achievements/player-achievements.html'
})
export class PlayerAchievementsComponent {
    playerAchievements:PlayerAchievements;

    constructor(private routeParams:RouteParams,
                private backlogService:SteamBacklogService,
                private userService:UserService) {

    }

    ngOnInit() {
        let id = this.routeParams.get('id');
        let appid = this.routeParams.get('appid');

        this.backlogService.getPlayerAchievements(id, appid)
            .subscribe(
                res => this.playerAchievements = new PlayerAchievements(res.username, res.achievements),
                err => console.log(err),
                () => this.userService.setSteamId(this.playerAchievements.id)
            );
    }
}

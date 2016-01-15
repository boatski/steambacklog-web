import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SteamBacklogService} from '../../services/steam-backlog.service';
import {UserService} from '../../services/user.service';

import {PlayerAchievements} from '../../models/player-achievements';

@Component({
    selector: 'player-achievements',
    templateUrl: 'app/main/player-achievements/player-achievements.html'
})
export class PlayerAchievementsComponent {
    @Input() game;
    playerAchievements:PlayerAchievements;

    constructor(private backlogService:SteamBacklogService,
                private userService:UserService) {

    }

    ngOnInit() {
        console.log('achieve', this.userService.getSteamId(), this.game.appid);

        this.backlogService.getPlayerAchievements(this.userService.getSteamId(), this.game.appid)
            .subscribe(
                res => this.playerAchievements = new PlayerAchievements(res.username, res.achievements),
                err => console.log(err),
                () => this.userService.setSteamId(this.playerAchievements.id)
            );

        //noinspection TypeScriptUnresolvedFunction
        $('#' + this.game.appid).openModal();
    }
}

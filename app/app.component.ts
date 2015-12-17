import {Component} from 'angular2/core';

import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {PlayerSummaryComponent} from './main/player-summary/player-summary.component';

@Component({
    selector: 'app',
    directives: [
      HeaderComponent,
      MainComponent,
      PlayerSummaryComponent
    ],
    templateUrl: 'app/app.html'
})
export class AppComponent { }

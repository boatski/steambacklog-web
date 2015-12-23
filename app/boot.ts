import {AppComponent} from './app.component';
import {SteamBacklogService} from './services/steam-backlog.service';
import {UserService} from './services/user.service';

import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  SteamBacklogService,
  UserService
]);

import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {UserService} from '../services/user.service';

@Component({
  selector: 'main',
  templateUrl: 'app/main/main.html'
})
export class MainComponent {
  constructor(
    private router:Router,
    private userService:UserService) {

  }

  summary(id) {
    if (id.length > 0) {
      this.userService.setSteamId(id)
      this.router.navigate(['Overview', { id: id }]);
    }
  }
}

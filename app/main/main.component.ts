import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'main',
  templateUrl: 'app/main/main.html'
})
export class MainComponent {
  constructor(
    private _router:Router) {

  }

  summary(id) {
    this._router.navigate(['Overview', { id: id }]);
  }

  ngOnDestroy() {
    console.log('main component destroyed');
  }
}

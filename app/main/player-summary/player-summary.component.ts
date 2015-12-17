import {Component} from 'angular2/core';
// import {FORM_DIRECTIVES} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'player-summary',
  templateUrl: 'app/main/player-summary/player-summary.html'
})
export class PlayerSummaryComponent {
  constructor(public http: Http) {

  }
  resolveUrl($event) {
    var result;
    console.log('resolving id: ' + 'http://127.0.0.1:3001/summary/' + $event);
    this.http.get('http://127.0.0.1:3001/summary/' + $event)
    .map(response => response.json())
    .subscribe(
      response => console.log(response)
    );
  }
}

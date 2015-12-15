import {Component} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/main/home/home.html'
})
export class Home {
  constructor(public http: Http) {

  }
  resolveUrl($event) {
    var result;
    console.log('resolving id: ' + 'http://127.0.0.1:3000/resolve/' + $event);
    this.http.get('http://127.0.0.1:3000/resolve/' + $event)
    .map(response => response.json())
    .subscribe(
      response => console.log(response),
      () => console.log('Resolved Vanity Url')
    );
  }
}

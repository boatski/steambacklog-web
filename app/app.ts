import {bootstrap, Component} from 'angular2/angular2';
import {Header} from './header/header.ts';

@Component({
    selector: 'app',
    directives: [Header],
    templateUrl: 'app/app.html'
})
class AppComponent { }
bootstrap(AppComponent);

import {bootstrap, Component} from 'angular2/angular2';
import {Header} from './header/header.ts';
import {Home} from './main/home/home.ts';

@Component({
    selector: 'app',
    directives: [Header, Home],
    templateUrl: 'app/app.html'
})
class AppComponent { }
bootstrap(AppComponent);

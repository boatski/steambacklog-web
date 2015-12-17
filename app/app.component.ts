import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './main/home/home.component';

@Component({
    selector: 'app',
    directives: [HeaderComponent, HomeComponent],
    templateUrl: 'app/app.html'
})
export class AppComponent { }

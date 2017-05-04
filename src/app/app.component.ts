/**
 * Created by andreykubasov on 02.05.17.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<app-header></app-header>
    <h1>{{title}}</h1>
    <nav>
      <a href="#" routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a href="#" routerLink="/dashboard" routerLinkActive="active">Dash</a>
    </nav>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      console.log(event);
    });
  }
}

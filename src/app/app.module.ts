/**
 * Created by andreykubasov on 02.05.17.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './auth-guard.service';
import {HeaderComponent} from './header.component';
import {SharedService} from './shared-service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeaderComponent
  ],
  providers: [ HeroService, AuthGuard, SharedService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/**
 * Created by andreykubasov on 02.05.17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import 'rxjs/add/operator/switchMap';
import {SharedService} from './shared-service';

@Component({
  selector: 'hero-detail',
  template: require('./hero-detail.component.html')
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private sharedservice: SharedService
  ) {  }
  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  setAsUser(hero: Hero): void {
      this.sharedservice.setuser({name: hero.name});
  }
}

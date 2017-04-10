import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input() private hero:any;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

}

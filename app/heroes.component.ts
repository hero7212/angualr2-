import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html'
})



export class HeroesComponent implements OnInit {

    private heroes: any;
    private selectedHero: any ;

    constructor(private heroService: HeroService) { }

    getHeroes():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }


    onSelect(hero:any) {
        this.selectedHero = hero;
    }

}

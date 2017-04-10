import { Injectable } from '@angular/core';

import { HEROES } from './mock-hero';

@Injectable()
export class HeroService {

    constructor() { }

    getHero(id: number): Promise<any> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}

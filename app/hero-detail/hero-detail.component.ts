import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input() private hero:any;

    constructor() { }

    ngOnInit() { }

}

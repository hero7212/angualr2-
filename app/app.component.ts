import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

    private title: string;

    constructor() { }


    ngOnInit() {
        this.title = "英雄指南";
    }

}

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroService } from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            }
        ])
    ],
    declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
    providers: [HeroService],
    bootstrap: [AppComponent],
})
export class AppModule { }


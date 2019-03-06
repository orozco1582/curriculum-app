import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingModule } from './modules/landing';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LandingModule,
        routing
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

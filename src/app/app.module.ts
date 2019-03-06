import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

// Modules
import { LandingModule } from './modules/landing';

// Main Component
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LandingModule,
        HttpClientModule,
        routing
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

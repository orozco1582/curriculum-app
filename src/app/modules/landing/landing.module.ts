import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LandingPageComponent,
        FooterContactComponent,
        NotFoundPageComponent
    ]
})
export class LandingModule {

    public static getRoutes() {
        return [
            {
                path: '',
                component: LandingPageComponent
            },
            {
                path: 'landing',
                component: LandingPageComponent
            },
            {
                path: '**',
                component: NotFoundPageComponent
            }
        ];
    }

}

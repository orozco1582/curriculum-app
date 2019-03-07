import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HeaderCvComponent } from './components/header-cv/header-cv.component';
// Services
import { CVService, GITService } from 'src/services';
// Modules
import { SharedModule } from '../shared/shared.module';
import { ExperienceInfoComponent } from './components/experience-info/experience-info.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        LandingPageComponent,
        FooterContactComponent,
        NotFoundPageComponent,
        HeaderCvComponent,
        ExperienceInfoComponent
    ],
    providers: [
        CVService,
        GITService
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

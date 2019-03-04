import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './modules/landing/components/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'landing',
        component: LandingPageComponent
    }
];

export const routing = RouterModule.forRoot(routes);

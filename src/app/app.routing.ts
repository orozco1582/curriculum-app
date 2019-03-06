import { Routes, RouterModule } from '@angular/router';
import { LandingModule } from './modules/landing';

export const routes: Routes = [
    ...LandingModule.getRoutes()
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'/dashboard',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path:'coi',
        component: EmptyPageComponent,
        pathMatch: 'full'
    },
    {
        path:'market_abuse',
        component: EmptyPageComponent,
        pathMatch: 'full'
    },
    {
        path:'insider_compliance',
        component: EmptyPageComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];

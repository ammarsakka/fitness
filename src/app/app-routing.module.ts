import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then((m) => m.AuthLayoutModule),
            },
        ],
    },
    {
        path: '',
        component: WebLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./layouts/web-layout/web-layout.module').then((m) => m.WebLayoutModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

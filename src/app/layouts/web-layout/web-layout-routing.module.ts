import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WEB_ROUTES } from '../../features/web/web-routing.module';

const routes: Routes = [...WEB_ROUTES];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WebLayoutRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebLayoutRoutingModule } from './web-layout-routing.module';
import { WebLayoutComponent } from './web-layout.component';

@NgModule({
    declarations: [WebLayoutComponent],
    imports: [CommonModule, WebLayoutRoutingModule],
})
export class WebLayoutModule {}

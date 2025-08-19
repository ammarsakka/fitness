import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WebLayoutRoutingModule } from './web-layout-routing.module';
import { WebLayoutComponent } from './web-layout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [WebLayoutComponent, HeaderComponent, FooterComponent],
    imports: [CommonModule, WebLayoutRoutingModule],
})
export class WebLayoutModule {}

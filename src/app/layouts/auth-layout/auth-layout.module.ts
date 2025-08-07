import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from '../../features/auth/login/login.module';
import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
    declarations: [AuthLayoutComponent],
    imports: [CommonModule, LoginModule, AuthLayoutRoutingModule],
})
export class AuthLayoutModule {}

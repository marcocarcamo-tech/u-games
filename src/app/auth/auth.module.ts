import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-router.module';

@NgModule({
  declarations: [
    SignInComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [SignInComponent, 
    LogInComponent
  ]
})
export class AuthModule { }

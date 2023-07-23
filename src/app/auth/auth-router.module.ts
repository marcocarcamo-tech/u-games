import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', redirectTo: 'log-in', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

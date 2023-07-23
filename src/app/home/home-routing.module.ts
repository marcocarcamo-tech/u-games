import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AddGameComponent } from './add-game/add-game.component';

const routesChildren: Routes = [
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: 'most-downloaded', component: MostDownloadedComponent},
  {path: 'most-popular', component: MostPopularComponent}, 
  {path: 'add-game', component: AddGameComponent},
  {path: '**', redirectTo: 'most-popular', pathMatch: 'full'},
];

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: routesChildren},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

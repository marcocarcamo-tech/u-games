import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostPopularComponent } from './most-popular/most-popular.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AddGameComponent } from './add-game/add-game.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MostPopularComponent,
    MostDownloadedComponent,
    ComingSoonComponent,
    HomeComponent,
    AddGameComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormsModule
  ]
})
export class HomeModule { }

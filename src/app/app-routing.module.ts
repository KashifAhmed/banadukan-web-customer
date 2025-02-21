import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './feature/home/home.component';
import { ItemDetailsComponent } from './feature/item-details/item-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details', component: ItemDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SettimeComponent } from './settime/settime.component';
//import { Routes } from '@angular/router';

const appRoutes:Routes = [
  {path:'settime',component: SettimeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

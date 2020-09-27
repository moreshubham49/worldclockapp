import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import{DatePipe}from '@angular/common'


import { AppComponent } from './app.component';
import { SettimeComponent } from './settime/settime.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SettimeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path:'',component:LoginComponent},
        {path:'',component:LoginComponent},
        {path:'settime',component:SettimeComponent}
      ]
    )
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

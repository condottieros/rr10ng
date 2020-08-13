import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { router } from '@/router/app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '@/pages/login/login.component';
import {Error404PageComponent } from '@/pages/e404/error404.component'



const routes: Routes = [
  {path: '', component: LoginPageComponent},
  //{path: 'aaa2', component: LoginPageComponent},
  {path: '**', component: Error404PageComponent},
];
const AppRouter = RouterModule.forRoot(routes, {enableTracing: true})

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    Error404PageComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from '@/pages/login/login.component'
import { Error404PageComponent } from '@/pages/e404/error404.component';
//import * as menuConf from './menu.json'
type JK = {
  title: string,
  subitems: Array<{
    title: string,
    path: string
  }>
}
const routes: Routes = [
  {path: '**', component: Error404PageComponent},
  {path: 'aaa', component: LoginPageComponent},
];
export const router = RouterModule.forRoot(routes, {enableTracing: true})

/*
@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //public ghj = menuConf as any
}
//const yu = new AppRoutingModule();
//yu.ghj.default.map(x => console.log('--->', x))

//console.log(Array.isArray( yu.ghj.default) ? 'ArrAy ' : 'not array ' ,'-->' ,yu.ghj.default)
*/

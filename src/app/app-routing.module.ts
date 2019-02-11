import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootPageSharedModule } from '../../projects/root-page/src/app/app.module';
import { AboutSharedModule } from '../../projects/about/src/app/app.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: '../../projects/root-page/src/app/app.module#RootPageSharedModule'
  },
  {
    path: 'about',
    loadChildren: '../../projects/about/src/app/app.module#AboutSharedModule'
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RootPageSharedModule.forRoot(),
    AboutSharedModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

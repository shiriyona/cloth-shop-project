import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateRouteGuard } from './core/can-activate-route.guard';

const appRoutes: Routes = [
    { path: 'cloth', loadChildren: () => import('./cloth/cloth.module').then(m => m.ClothModule),
    canActivate: [CanActivateRouteGuard]},
    { path: 'jewel', loadChildren: () => import('./jewel/jewel.module').then(m => m.JewelModule),
    canActivate: [CanActivateRouteGuard]},
    { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule), 
     canActivate: [CanActivateRouteGuard]},
    {
        path: '',
        redirectTo: 'cloth',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
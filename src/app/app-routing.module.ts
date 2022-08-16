import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'cloth', loadChildren: () => import('./cloth/cloth.module').then(m => m.ClothModule)},
    { path: 'jewel', loadChildren: () => import('./jewel/jewel.module').then(m => m.JewelModule)},
    { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule)},
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
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { ClothListComponent } from './cloth-list/cloth-list.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const appRoutes: Routes = [
    { path: 'women', component: WomenComponent },
    { path:'men', component: MenComponent },
    { path: 'children', component: ChildrenComponent },
    { path: 'clothes-list', component: ClothListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
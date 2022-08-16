import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenComponent } from './components/children/children.component';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';


const routes: Routes = [
    { path: 'women', component: WomenComponent },
    { path:'men', component: MenComponent },
    { path: 'children', component: ChildrenComponent },
    {
        path: '',
        redirectTo: 'women',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClothRoutingModule {
  
  }
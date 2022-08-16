import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { AllJewelsComponent } from "./components/all-jewels/all-jewels.component";
import { JewelOrderFormComponent } from "./components/jewel-order-form/jewel-order-form.component";


const routes: Routes = [
    { path: 'all-jewels', component: AllJewelsComponent  },
    { path:'jewel-order-form', component: JewelOrderFormComponent },
    {
        path: '',
        redirectTo: 'All Jewels',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


  export class JewelRoutingModule {
  
  }


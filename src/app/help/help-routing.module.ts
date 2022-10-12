import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";


const routes: Routes = [
    { path: 'contact', component: ContactComponent  },
    { path:'about', component: AboutComponent },
    {
        path: 'contact',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class HelpRoutingModule {

}


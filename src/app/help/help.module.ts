import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HelpRoutingModule } from "./help-routing.module";
import { HelpService } from "./services/help.service";
import { DialogContentComponent } from './components/contact/dialog-content/dialog-content.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
    declarations: [
        ContactComponent,
        AboutComponent,
        DialogContentComponent

    ],

    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule, 
        MatDialogModule,
        HttpClientModule,
        HelpRoutingModule
    ],
    providers: [ HelpService,
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ],
})
export class HelpModule { }
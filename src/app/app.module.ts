import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ChildrenComponent } from './children/children.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClothListComponent } from './cloth-list/cloth-list.component';
import { ClothItemComponent } from './cloth-list/cloth-item/cloth-item.component';

import { ClothService } from './cloth.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomenComponent,
    MenComponent,
    ChildrenComponent,
    ClothListComponent,
    ClothItemComponent 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],
  providers: [ ClothService],
  bootstrap: [AppComponent]
})
export class AppModule { }

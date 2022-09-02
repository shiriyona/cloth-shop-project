import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { ChildrenComponent } from './components/children/children.component';
import { ClothItemComponent } from './components/cloth-list/cloth-item/cloth-item.component';
import { ClothService } from './services/cloth.service';
import { NgModule } from '@angular/core';

import { ClothRoutingModule } from './cloth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ClothDetailComponent } from './components/cloth-detail/cloth-detail.component';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';
import { AmountToStringPipes } from './pipes/amount-to-string-pipe';


@NgModule({
  declarations: [
    WomenComponent,
    MenComponent,
    ChildrenComponent,
    ClothItemComponent,
    ClothListComponent ,
    ClothDetailComponent,
    AmountToStringPipes
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ClothRoutingModule
  ],
  providers: [ ClothService, AmountToStringPipes],
})
export class ClothModule { }

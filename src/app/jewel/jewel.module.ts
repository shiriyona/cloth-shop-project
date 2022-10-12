import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { JewelRoutingModule } from "./jewel-routing.module";
import { AllJewelsComponent } from './components/all-jewels/all-jewels.component';
import { JewelOrderFormComponent } from './components/jewel-order-form/jewel-order-form.component';
import { JewelService } from "./services/jewel.service";
import { JewelListComponent } from "./components/all-jewels/jewel-list/jewel-list.component";
import { JewelItemComponent } from "./components/all-jewels/jewel-list/jewel-item/jewel-item.component";
import { JewelDetailComponent } from './components/all-jewels/jewel-detail/jewel-detail.component';
import { DialogOrderComponent } from './components/jewel-order-form/dialog-order/dialog-order.component';
import { MatDialogModule } from "@angular/material/dialog";
import { AmountToStringPipes } from "./pipes/amount-to-string-pipe";


@NgModule({
    declarations: [
    AllJewelsComponent,
    JewelOrderFormComponent,
    JewelListComponent, 
    JewelItemComponent,
    JewelDetailComponent,
    DialogOrderComponent,
    AmountToStringPipes
    ],

    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        JewelRoutingModule,
        MatDialogModule,
    ],
    providers: [ JewelService, AmountToStringPipes ],
})
export class JewelModule { }
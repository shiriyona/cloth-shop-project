import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DialogOrderComponent } from './dialog-order/dialog-order.component';
import {MatDialog} from '@angular/material/dialog';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-jewel-order-form',
  templateUrl: './jewel-order-form.component.html',
  styleUrls: ['./jewel-order-form.component.css']
})
export class JewelOrderFormComponent implements OnInit {
  orderForm = new FormGroup({
    name : new FormControl('', [Validators.minLength(2), Validators.required]),
    adress : new FormControl('', [Validators.required, Validators.required]),
    email : new FormControl('', [Validators.email, Validators.required]),
    password : new FormControl('', [Validators.minLength(8), Validators.required])
  });

  matcher = new MyErrorStateMatcher();


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.orderForm.value);
    console.log(this.orderForm);
    this.orderForm.reset();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOrderComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

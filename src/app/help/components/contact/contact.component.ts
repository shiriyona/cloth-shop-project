import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Contact } from '../../model/help.model';
import { HelpService } from '../../services/help.service';
import { DialogContentComponent } from './dialog-content/dialog-content.component';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(2), Validators.required]),
    phoneNumber: new FormControl('', [Validators.min(9), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    about: new FormControl('', [Validators.required, Validators.required]),
    tellUsMore: new FormControl(''),
  });

  @Input() contact: Contact;

  matcher = new MyErrorStateMatcher();

  loadSubmitDataSubscription: Subscription;

  constructor(public dialog: MatDialog, 
    private helpService: HelpService) {}


  ngOnInit(): void {
  }


  onSubmit() {
    console.warn(this.contactForm.value);
    console.log(this.contactForm);
    this.loadSubmitDataSubscription = this.helpService.loadContactData(this.contactForm.value).subscribe(
      res => {
        this.contactForm.reset();

      }
      ); 
  }

  onGetData() {
    this.loadSubmitDataSubscription = this.helpService.getContactData(this.contactForm).subscribe(res => {
      this.contactForm = res;
    }); 
  }

  ngOnDestroy(): void {
    if(this.loadSubmitDataSubscription) {
      this.loadSubmitDataSubscription.unsubscribe();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    company: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required)
  });

  contactFormValidationErrors = {
    fullName: [
      { type: 'required', message: 'Full name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    message: [
      { type: 'required', message: 'Please type in the message you wish to send' }
    ]
  };

  constructor() { }

  onSubmit() {
    console.warn('[Contact Form] => ', this.contactForm.value);
  }

  ngOnInit() {
  }

}

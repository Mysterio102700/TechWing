import { Component } from '@angular/core';
import { Book } from '../models/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { BookserviceService } from '../services/bookservice.service';
declare var Razorpay: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  book: Book = new Book();
  registrationsforms!: FormGroup;
  selectedOption: any;
  razorpayKey = 'rzp_test_OunDF3i0kLU8qm';

  constructor(
    private service: BookserviceService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.registrationsforms = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  isSubmitting = false;

  submit() {
    if (this.validateForm()) {
      this.isSubmitting = true;
      this.service.details(this.book).subscribe(
        (response: any) => {
          if (response.status === 201) {
            alert('Successfully inserted');
          } else {
            alert('Something went wrong. Status: ' + response.status);
          }
          this.isSubmitting = false;
        },
        (error: any) => {
          console.error('Error:', error);
          alert('An error occurred');
          this.isSubmitting = false;
        }
      );
    }
  }

  validateForm(): boolean {
    if (
      !this.book.fullname ||
      this.book.fullname.length < 5 ||
      this.book.fullname.length > 30
    ) {
      alert('Full Name must be between 5 and 30 characters.');
      return false;
    }

    if (!this.book.pinno || this.book.pinno.length !== 10) {
      alert('PIN must be exactly 10 characters.');
      return false;
    }

    if (!this.book.email || !this.isEmailValid(this.book.email.toString())) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!this.book.phone || this.book.phone.toString().length !== 10) {
      alert('Mobile Number must be 10 digits long.');
      return false;
    }

    if (!this.book.year) {
      alert('Year is required.');
      return false;
    }

    if (!this.book.Gender) {
      alert('Gender is required.');
      return false;
    }


    if (!this.book.Size) {
      alert('Please select a course.');
      return false;
    }

    return true;
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  // payNow() {
  //   const RazorpayOptions = {
  //     key: this.razorpayKey,
  //     amount: '100000',
  //     name: 'Test Transaction',
  //     description: 'Rs. 500 for test',
  //     image: '../../assets/png/logo.png',
  //     currency: 'INR',
  //     prefill: {
  //       name: this.book.fullname,
  //       email: this.book.email,
  //       contact: this.book.phone,
  //     },
  //     handler: (response: { razorpay_payment_id: any; }) => {  
  //       this.book.id=response.razorpay_payment_id;      
  //       this.submit();
  //     },
  //     theme: {
  //       color: '#f37254',
  //     },
  //     modal: {
  //       ondismiss: () => {
  //         console.log('dismissed');
  //       },
  //     },
  //   };
  //   const successCallback = (paymentid: any) => {
  //     console.log(paymentid);
  //   };
  //   const failureCallback = (e: any) => {
  //     console.log(e);
  //   };

  //   Razorpay.open(RazorpayOptions, successCallback, failureCallback);
  // }
}

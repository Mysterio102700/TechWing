import { Component } from '@angular/core';
import { Book } from '../models/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  book: Book = new Book();
  registrationsforms!: FormGroup;
  selectedOption: any;

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

  ngOnInit(): void {
  }

  isSubmitting = false;

submit() {
  if (this.isSubmitting) {
    return;
  }

  this.isSubmitting = true; 

  this.service.details(this.book).subscribe(
    (response: HttpResponse<any>) => {
      console.log('Full Response:', response);

      if (response.status === 201) {
        alert('Successfully inserted');
      } else {
        alert('Something went wrong. Status: ' + response.status);
      }

      this.isSubmitting = false; 
    },
    (error) => {
      console.error('Error:', error);
      alert('An error occurred');

      this.isSubmitting = false; 
    }
  );
}

  
}

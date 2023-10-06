import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  selectedOption: string = 'register';

  reg: Register = new Register();

  registrationsform: FormGroup; 

  constructor(
    private service: RegisterService,
    private formBuilder: FormBuilder
  ) {
    this.registrationsform = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(6)]], // Example validation rule for Username
      mobileNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.updateImage();
  }

  onSelectChange(event: Event): void {
    this.selectedOption = (event.target as HTMLSelectElement).value;
    this.updateImage();
  }

  private updateImage(): void {
    const selectedImage = document.getElementById(
      'selectedImage'
    ) as HTMLImageElement;
    selectedImage.src = `${this.selectedOption}.png`;
    selectedImage.alt = `Selected Image: ${this.selectedOption}`;
  }

  isSubmitting = false;


  submit() {
    this.service.details(this.reg).subscribe(
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
    )
  }
}

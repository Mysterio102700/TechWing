import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  reg: Register = new Register();
  selectedOption: string = 'register';
  isSubmitting = false;

  constructor(private service: RegisterService) {}

  ngOnInit(): void {
    this.updateImage();
  }

  onSelectChange(event: any): void {
    this.selectedOption = event.target.value;
    this.updateImage();
  }

  private updateImage(): void {
    const selectedImage = document.getElementById(
      'selectedImage'
    ) as HTMLImageElement;
    selectedImage.src = `../assets/png/${this.selectedOption}.png`;
    selectedImage.alt = `Selected Image: ${this.selectedOption}`;
  }

  submit() {
    if (this.validateForm()) {
      this.isSubmitting = true;
      this.service.details(this.reg).subscribe(
        (response: any) => {
          if (response.status === 201) {
            alert('Successfully Registered');
            location.reload()
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
      !this.reg.fullName ||
      this.reg.fullName.length < 5 ||
      this.reg.fullName.length > 30
    ) {
      alert('Full Name must be between 5 and 30 characters.');
      return false;
    }

    if (!this.reg.PinNo || this.reg.PinNo.length !== 10) {
      alert('PIN must be exactly 10 characters.');
      return false;
    }

    if (!this.reg.Email || !this.isEmailValid(this.reg.Email.toString())) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!this.reg.Mobile || this.reg.Mobile.toString().length !== 10) {
      alert('Mobile Number must be 10 digits long.');
      return false;
    }

    if (!this.reg.year) {
      alert('Year is required.');
      return false;
    }

    if (!this.reg.course || this.reg.course === 'register') {
      alert('Please select a course.');
      return false;
    }

    return true;
  }

  isEmailValid(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}

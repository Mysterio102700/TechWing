import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  selectedOption: string = 'register';

  reg: Register = new Register();

  registrationsform: FormGroup; // Declare the form variable

  constructor(
    private service: RegisterService,
    private formBuilder: FormBuilder
  ) {
    this.registrationsform = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(6)]], // Example validation rule for Username
      mobileNumber: ['', Validators.required],
      // Add other form controls here
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

  submit() {
    this.service.details(this.reg).subscribe((data) => {
      alert('successfully inserted');
    });
  }
}

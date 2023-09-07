import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  selectedOption: string = 'register';

  reg: Register = new Register();

  constructor(private service:RegisterService) {}



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
    this.service.details(this.reg).subscribe((data=>{
      alert('successfully inserted');  
    }));
  }

  
}




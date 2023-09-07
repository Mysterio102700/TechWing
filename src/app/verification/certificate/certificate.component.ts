import { Component } from '@angular/core';
import { Check } from '../../models/check';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckserviceService } from '../../services/checkservice.service';
import {ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  @ViewChild('pdfElement', { static: false }) pdfElement!: ElementRef;

  LOGO="assets/images/image-removebg-preview1.png";
  alt="logo";
  verify: any; 

  constructor(
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private check: CheckserviceService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.check.getById(params['id']).subscribe((data) => {
          this.verify = data;
          console.log(this.verify); // Logging the fetched data

          if (Array.isArray(this.verify) && this.verify.length > 0) {
            const firstElement = this.verify[0];
            console.log('First element:', firstElement);
          }
        });
      }
    });
  }

  printSection() {
    const printContent = this.elementRef.nativeElement.querySelector('.print-section');
    
    // Create a temporary container and clone the print section
    const tempContainer = document.createElement('div');
    tempContainer.appendChild(printContent.cloneNode(true));

    // Open a new window and write the print content to it
    // const printWindow = window.open('', '', 'width=600,height=600');
    // printWindow.document.open();
    // printWindow.document.write('<html><head><title>Print</title></head><body>');
    // printWindow.document.write(tempContainer.innerHTML);
    // printWindow.document.write('</body></html>');
    // printWindow.document.close();

    // Trigger print on the new window
    // printWindow.print();
    // printWindow.close();
    window.print();
  }
}

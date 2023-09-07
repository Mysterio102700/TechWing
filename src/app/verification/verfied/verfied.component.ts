import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckserviceService } from '../../services/checkservice.service';

@Component({
  selector: 'app-verfied',
  templateUrl: './verfied.component.html',
  styleUrls: ['./verfied.component.css'],
})
export class VerfiedComponent implements OnInit {
  verify: any;
  showspinner = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private check: CheckserviceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.check.getById(params['id']).subscribe((data) => {
          this.verify = data;
          this.showspinner = false; 
          
          if (Array.isArray(this.verify) && this.verify.length > 0) {
            const firstElement = this.verify[0];
            console.log('First element:', firstElement);
          }
        });
      }
    });
  }
}

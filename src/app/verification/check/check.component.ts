import { Component } from '@angular/core';
import { Check } from '../../models/check';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CheckserviceService } from '../../services/checkservice.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent {
  check: Check = new Check();
  checkform!: FormGroup;
  checklist: Check[] = [];
  routes: any;

  LOGO="assets/images/image-removebg-preview1.png";
  alt="logo";

  constructor(
    private formbuild: FormBuilder,
    private services: CheckserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkform = this.formbuild.group({
      id: new FormControl('', Validators.compose([Validators.required])),
    });
    this.services.getById(this.check)
  }

  // Submit() {
  //   this.router.navigateByUrl(`/verify/{id}`)
  //   console.log(this.check);
  // }
}

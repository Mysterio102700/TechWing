import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {

  Images=[
    {
      img:'../../assets/images/certification/Angular.png'
    },
    {
      img:"../../assets/images/certification/CCNA.png"
    },
    {
      img:"../../assets/images/certification/CloudPractitioner.png"
    },
    {
      img:"../../assets/images/certification/SolutionArchitect.png"
    },
    {
      img:"../../assets/images/certification/RedHat.png"
    }
  ]

}

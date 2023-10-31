import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  constructor() {}
  ngOnInit() {}
  courses = [
    {
      name: 'AWS',
      price: 6000,
      description: [
        '- 120 hours',
        '- LEARN ABOUT VARIOUS AWS SERVICES',
        '- PRACTICE IN A LICENCED ENVIRONMENT ',
        '- BECAME A CERTIFIED AWS CLOUD PRACTITIONER',
        '- INCLUDES CAPSTONE PROJECT',
        '- CERTIFICATIONS OPENS HIGH PACKAGES',
      ],
      img: '../assets/images/courses/AWS.png',
    },
    {
      name: 'Java FullStack',
      price: 7500,
      description: [
        '- 180 hours',
        '- BECOME MASTER IN FULL STACK FRONT-END , BACK-END- DATABASE DOMAINS',
        '- READY TO TAKE CERTIFICATIONS ( JAVA CERTIFIED DEVELOPER) EXCLUDED',
        '- HANDS ON PRACTICAL PROJECTS',
        '- CAPSTONE PROJECT',
      ],
      img: '../assets/images/courses/fullstack.png',
    },
    {
      name: 'RedHat',
      price: 6000,
      description: [
        'Red Hat combines open source Linux operating system components with related programs into a distribution package that customers can order. Red Hat OpenShift, an open-source container application platform. Red Hat OpenStack Platform, a distributed open-source OpenStack software designed to manage large pools of computing, storage, and networking resources under a public and private cloud'
      ],
      img: '../assets/images/courses/redhat.png',
    },
    {
      name: 'Cisco',
      price: 6000,
      description: [
        'LEARN ABOUT VARIOUS AWS SERVICES',
        'PRACTICE IN A LICENCED ENVIRONMENT ',
        'BECAME A CERTIFIED AWS CLOUD PRACTITIONER',
        'INCLUDES CAPSTONE PROJECT',
        'CERTIFICATIONS OPENS HIGH PACKAGES',
      ],
      img: '../assets/images/courses/cisco.png',
    },
    {
      name: 'CORE JAVA',
      price: 1500,
      description: [
        '- 1 month exclusive for 2nd years',
        '- Hands-on Java programming',
        '- Stragical programming',
        '- Add-ons ',
        '- Certification excluded',
      ],
      img: '../assets/images/courses/java.png',
    },
  ];
}

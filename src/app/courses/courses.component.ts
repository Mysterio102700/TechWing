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
    { name: 'AWS', price: 6000, description: 'Amazon Web Services (AWS) is a cloud computing platform that offers scalable and cost-effective solutions for individuals, companies, and governments. AWS provides on-demand services for compute power, database storage, content delivery, and more. AWS offers more than 200 services from data centers globally.',img:'../assets/images/courses/AWS.png' },
    { name: 'Java FullStack', price: 7500, description: 'Java Full Stack Development is a comprehensive approach to building web applications that encompasses both the front-end and back-end development using the Java programming language. Developers proficient in Java Full Stack are skilled in creating interactive user interfaces, handling server-side logic, and managing databases, making them capable of delivering end-to-end solutions for modern web applications',img:"../assets/images/courses/fullstack.png" },
    { name: 'RedHat', price: 6000, description: 'Red Hat combines open source Linux operating system components with related programs into a distribution package that customers can order. Red Hat OpenShift, an open-source container application platform. Red Hat OpenStack Platform, a distributed open-source OpenStack software designed to manage large pools of computing, storage, and networking resources under a public and private cloud',img:"../assets/images/courses/redhat.png" },
    { name: 'Cisco', price: 6000, description: "Cisco specializes in switches, routers, cybersecurity, and IoT. Cisco's hardware, software, and service offerings are used to create the Internet solutions that make networks possible. Cisco's logo can be found on many office telephones and conference hardware.",img:"../assets/images/courses/cisco.png" }
  ];
}
